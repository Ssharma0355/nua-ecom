import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "../../pages/Loading";
import "../../assets/ProductList.scss";
import ProductCardSkeleton from "../../pages/ProductCardSkeleton/ProductCardSkeleton";

function ProductList() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState("");
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
  if (!isLoading) {
    return <ProductCardSkeleton/>;
  }

  return (
    <section className="product-list">
      {products.map((product) => (
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
  );
}

export default ProductList;
