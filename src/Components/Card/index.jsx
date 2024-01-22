import { useContext } from 'react';

import { ShoppingCartContext } from '../../Context';

import './styles.css';

function Card(data) {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCart = (e, productData) => {
    e.stopPropagation();
    // context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckOutSideMenu();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center w-6 h6 rounded-full m-2 text-green-800'
          id='bg-color'
        >
          {/* Check Icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m4.5 12.75 6 6 9-13.5'
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center w-6 h6 rounded-full m-2'
          id='bg-color'
          onClick={(e) => addProductsToCart(e, data.data)}
        >
          {/* Add Icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>
        </button>
      );
    }
  };

  return (
    <div
      className='bg-white/40 cursor-pointer w-56 h-70 rounded-lg'
      onClick={() => showProduct(data.data)}
    >
      <figure className='relative mb-2 w-full h4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.data.category.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-t-lg'
          src={data.data.images[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className='flex justify-between p-2'>
        <span className='text-sm font-light '>{data.data.title}</span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  );
}

export default Card;
