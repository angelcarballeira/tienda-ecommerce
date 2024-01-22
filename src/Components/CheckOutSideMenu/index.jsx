import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ShoppingCartContext } from '../../Context';
import { totalPrice } from '../../Utils';
import OrderCard from '../OrderCard';

import './styles.css';

const CheckOutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckOut = () => {
    const orderToAdd = {
      date: '01.21.24',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu  flex-col fixed right-1 border border-black rounded-lg`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Mi carrito</h2>
        <button onClick={() => context.closeCheckOutSideMenu()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            // className='w-6 h-6'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
        </button>
      </div>

      <div className='px-6 overflow-y-auto flex-1'>
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light text-lg'>Total: </span>
          <span className='font-medium text-2xl'>
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to={'/my-orders/last'}>
          {' '}
          <button
            className='w-full py-3 button-style font-semibold rounded-lg'
            onClick={() => handleCheckOut()}
          >
            Comprar
          </button>
        </Link>
      </div>
    </aside>
  );
};

export { CheckOutSideMenu };
