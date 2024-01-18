import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

import './styles.css';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail  flex-col fixed right-1 border border-black rounded-lg`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detalle</h2>
        <button onClick={() => context.closeProductDetail()}>
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
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-md'
          src={context.productToShow.images?.[0]}
          alt={context.productToShow.title}
        />
      </figure>

      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>
          ${context.productToShow.price}
        </span>
        <span className='font-medium text-md'>
          {context.productToShow.title}
        </span>
        <span className='font-light text-sm'>
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export { ProductDetail };
