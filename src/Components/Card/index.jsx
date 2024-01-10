function Card(data) {
  return (
    <div className='bg-white/40 cursor-pointer w-56 h-70 rounded-lg'>
      <figure className='relative mb-2 w-full h4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.data.category.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-t-lg'
          src={data.data.images[0]}
          alt={data.data.title}
        />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h6 rounded-full m-2 p-1'>
          +
        </div>
      </figure>
      <p className='flex justify-between p-2'>
        <span className='text-sm font-light '>{data.data.title}</span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  );
}

export default Card;
