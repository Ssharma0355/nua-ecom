import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "../../pages/Loading";
import "../../assets/ProductList.scss";
import ProductCardSkeleton from "../../pages/ProductCardSkeleton/ProductCardSkeleton";
import { GrPrevious, GrNext } from "react-icons/gr";

function ProductList() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Pagination Logic
  const Number_Of_Product_In_Page = 12;
  const Number_Of_Products = products.length;
  const Number_Of_Pages = Math.ceil(
    Number_Of_Products / Number_Of_Product_In_Page
  );
  const Start = currentIndex * Number_Of_Product_In_Page;
  const End = Start + Number_Of_Product_In_Page;

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${baseUrl}/products?limit=1000`);
      const resJson = await res.json();
      setProducts(resJson.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const selectCurrentIndex = (index) => {
    setCurrentIndex(index);
  };
  const nextPage = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  if (isLoading) {
    return <ProductCardSkeleton />;
  }

  return (
    <div>
      <section className="product-list">
        {products.slice(Start, End).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
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
      <div className="pagination">
        <button
          className="page-btn"
          onClick={prevPage}
          disabled={currentIndex === 0}
        >
          <GrPrevious />
        </button>

        {[...Array(Number_Of_Pages).keys()].map((n) => (
          <button
            key={n}
            className={`page-number ${currentIndex === n ? "active" : ""}`}
            onClick={() => selectCurrentIndex(n)}
          >
            {n + 1}
          </button>
        ))}

        <button
          className="page-btn"
          onClick={nextPage}
          disabled={currentIndex === Number_Of_Pages - 1}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default ProductList;
