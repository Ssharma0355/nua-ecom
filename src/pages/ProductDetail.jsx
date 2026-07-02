import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductDetailsSkeleton from './ProductCardSkeleton/ProductDetailsSkeleton';

function ProductDetail() {
  const { id } = useParams();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(null)

  const getProduct = async()=>{
    try{
      setIsLoading(true)
      const res = await fetch(`${baseUrl}/products/${id}`)
      const resJson = await res.json();
      setProduct(resJson.data)
    }
    catch(err){
      console.log(err)
    }
    finally{
      setIsLoading(false)
    }
 
  }
  
  useEffect(()=>{
    getProduct();
  },[id])

  if(!isLoading){
    return(<ProductDetailsSkeleton />)
  }

  return (
    <div>
      ProductDetail
    </div>
  )
}

export default ProductDetail
