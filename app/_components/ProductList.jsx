"use client"
import React from 'react'
import ProductItem from './ProductItem'
// import { useEffect } from 'react'

function ProductList({productList}) {

  return (
    <div className='mt-10'>
      <h2 className='text-green-600 font-bold text-2xl'>Our popular products</h2>
      <div className='grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-5 mt-6'>
        {productList?.map((product,index)=>index<10&&(
           <ProductItem product={product}/> 
        ))}
      </div>
    </div>
  )
}

export default ProductList


