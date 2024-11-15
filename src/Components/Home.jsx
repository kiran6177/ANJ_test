import React, { useEffect, useState } from 'react'
import useFetch from '../utils/useFetch'
import { PRODUCT_API } from '../constants/api';
import ProductCard from './ProductCard';
import { filterCategory } from '../utils/filterCategory';
import CategoryBox from './CategoryBox';
import SearchBox from './SearchBox';

function Home() {
    const [data,loading,error,fetchData] = useFetch();
    const [categoryFiltered,setCategoryFiltered] = useState({});
    const [productData,setProductData] = useState([])

    useEffect(()=>{
        console.log("REachjed")
        fetchData(PRODUCT_API)
    },[])

    useEffect(()=>{
        console.log(data)
        if(data?.length > 0){
            setProductData(data)
            setCategoryFiltered(filterCategory(data))
        }
    },[data])


    const searchProduct = (query)=>{
        let searchResults = []
        for(let product of data){
            if(product?.title?.toLowerCase().match(query.toLowerCase())){
                searchResults.push(product)
            }
        }
        setProductData(searchResults)
    }

  return ( 
    <div className='home'>
        <div className='head-flex'>
        <h2 className='head-2'>Products</h2>
        <SearchBox handleSearch={searchProduct} />
        </div>
      <div className='product-grid'>
        {
            productData?.map(product=>{
                return <ProductCard key={product?.id} product={product} />
            })
        }
      </div>
        <h2 className='head-2'>Categories</h2>
      <div  className='product-grid'>
      {
        Object.entries(categoryFiltered)?.map(category=>{
            return <CategoryBox key={category[0]} head={category[0]}  catBasedProducts={category[1]} /> 
        })
      }
      </div>
    </div>
  )
}

export default Home
