import React from 'react'

function ProductCard({product}) {
  return (
    <div className='pro-main'>
      <div className='img-div'>
        <img src={product?.image} alt="" className='img-cover' />
      </div>
      <p className='color-white'>{product?.price}</p>
      <h5 className='color-white'>{product?.title}</h5>
      <h6 className='color-white'>{product?.category}</h6>
    </div>
  )
} 

export default ProductCard
