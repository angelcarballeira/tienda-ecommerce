import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';

import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  const returnIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6 text-black cursor-pointer'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.75 19.5 8.25 12l7.5-7.5'
      />
    </svg>
  );
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to={'/my-orders'} className='absolute left-0'>
          {returnIcon}
        </Link>
        <h1>Mi orden</h1>
      </div>
      <div className='flex flex-col w-80'>
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
