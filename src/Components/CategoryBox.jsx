import React from 'react'
import ProductCard from './ProductCard'

function CategoryBox({head,catBasedProducts}) {
  return (
    <div className='category-grid'>
        <h5 className='head-2 color-white' >{head}</h5>
      {
        catBasedProducts?.map(product=>{
            return <ProductCard key={product?.id} product={product} /> 
        })
      }
    </div>
  )
}

export default CategoryBox
