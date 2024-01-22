const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  const currenDate = () => {
    const date = new Date().toLocaleDateString();
    return date;
  };

  const goIcon = (
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
        d='m8.25 4.5 7.5 7.5-7.5 7.5'
      />
    </svg>
  );

  return (
    <div className='flex justify-between items-center mb-2 border-b border-gray-400'>
      <p className='flex justify-between items-center w-80 p-2 '>
        <span>{currenDate()}</span>
        <span>
          {totalProducts} {totalProducts === 1 ? 'producto' : 'productos'}
        </span>
        <span>${totalPrice}</span>
        <span>{goIcon}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
