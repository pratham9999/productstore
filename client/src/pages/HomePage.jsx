/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from '../Components/ProductCard'
import { ProductsContext } from '../Provider/ProductsContext'
export default function HomePage() {

  const {products , setProducts} =  useContext(ProductsContext)

  useEffect(()=>{

      axios.get("http://localhost:3000/api/products/").then(res=>{

        setProducts(res.data.data)
      })

  },[])

  const handleUpdateProduct = (updatedProduct)=>{        
   setProducts((prevProducts)=>
           prevProducts.map((product)=>
          
              product._id === updatedProduct._id ? updatedProduct : product
            )
      )
  }

  const handleDelete = (productId)=>{
          setProducts((prevProducts)=>
            prevProducts.filter((product)=> product._id!== productId)
          ) 
  }
  return (
    <div className='pt-5'>
        <div className='flex justify-center font-bold text-2xl text-blue-800'>
         Current Products
        </div>

               {
                   products.length>0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center p-5'>
                         
                         {products.map((product , index)=>(
                             <div key={product._id} className=' flex flex-col border p-4 shadow w-full max-w-xs'>

                              <ProductCard name={product.name} price ={product.price} image={product.image} id={product._id} onUpdate={handleUpdateProduct} onDelete={handleDelete} />
                             
                             </div>
                   ))} 
                        
                   </div>) : (<div>Loading</div>)
               }         
    </div>
  )
}
