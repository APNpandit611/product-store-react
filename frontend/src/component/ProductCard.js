const ProductCard = (props) => {
    const { image, title, price, rating } = props.product
    return (
      <div className='p-5'>
        <div className='border-solid border-2 border-gray-300 rounded-lg shadow-lg w-64 p-4 bg-white'>
          <div className='flex justify-center mb-4'>
            <img src={image} alt="product-img" className='object-contain h-48 w-48' />
          </div>
          <div className='text-lg font-semibold text-gray-800 mb-2'>{title}</div>
          <div className='text-md text-gray-600'>Ratings: <span className="text-green-500 font-bold">{rating.rate}</span></div>
          <div className='text-md text-gray-600'>Price: <span className="text-green-500 font-bold">${price}</span></div>
  
        </div>
  
      </div>
    )
  }
  
  export default ProductCard