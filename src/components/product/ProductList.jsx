import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "../../pages/Loading";
import "../../assets/ProductList.scss";
import ProductCardSkeleton from "../../pages/ProductCardSkeleton/ProductCardSkeleton";
import { GrPrevious,GrNext   } from "react-icons/gr";


function ProductList() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0)

  // Pagination Logic
  const Number_Of_Product_In_Page = 10;
  const Number_Of_Products = products.length;
  const Number_Of_Pages = Math.ceil(Number_Of_Products/Number_Of_Product_In_Page)
  const Start = currentIndex*Number_Of_Product_In_Page;
  const End = Start+Number_Of_Product_In_Page;

  const getProducts = async () => {
    try {
      setIsLoading(false);
      const res = await fetch(`${baseUrl}/products?limit=1000`);
      const resJson = await res.json();
      setProducts(resJson.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(true);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const selectCurrentIndex=(index)=>{
    setCurrentIndex(index)
  }
  const nextPage =()=>{
    setCurrentIndex(prev => prev+1)
  }
  const prevPage = ()=>{
    setCurrentIndex(prev => prev-1)

  }
  if (!isLoading) {
    return <ProductCardSkeleton/>;
  }

  return (
    <div>
       <div style={{display:"flex",gap:"12px"}}>
        <button onClick={prevPage} style={{padding:"12px"}}
        disabled={currentIndex === 0}
        ><GrPrevious /></button>
        
        {[...Array(Number_Of_Pages).keys()].map(n=>(
        <p key={n}
        onClick={()=>{selectCurrentIndex(n)}}
        style={{
          border:"1px solid black",
          padding:"12px",
          borderRadius:"8px"
        }}
        
        >{n+1}</p>
        ))}
        <button onClick={nextPage} style={{padding:"12px"}} disabled={currentIndex === Number_Of_Pages-1 }><GrNext />
        </button>
        </div>
        <section className="product-list">
          
     
     {products.slice(Start,End).map((product) => (
       <ProductCard
         key={product.id}
         title={product.title}
         prodImg={product.thumbnail}
         category={product.category}
         rating={product.rating}
         discount={product.discountPercentage}
         stock={product.stock}
         description={product.description}
         price={product.price}
       />
     ))}
   </section>

    </div>
   
  );
}

export default ProductList;
