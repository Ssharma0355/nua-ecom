import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import ProductDetailsSkeleton from "./ProductCardSkeleton/ProductDetailsSkeleton";
import "../styles/ProductDetail.scss";
import { GrPrevious } from "react-icons/gr";
import { useCart } from "../hooks/useCart";


function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate()
  const { dispatch } = useCart();

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(`${baseUrl}/products/${id}`);
      const data = await res.json();

      setProduct(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);
  const handleAddToCart = (e) => {
    e.stopPropagation();
  
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        title:product.title,
        price:product.price,
        thumbnail: product.thumbnail,
        category: product.category,
      },
    });
  };

  const selectColor=(id)=>{
    setSelectedColor(id)
  }
  const selectSize =(id)=>{
    setSelectedSize(id)
  }
  if (isLoading) return <ProductDetailsSkeleton />;

  return (
    <>
      <div className="back-button">
      <GrPrevious />
      <span  onClick={() => navigate(-1)}>Home</span>
      <GrPrevious />
      <span style={{color:"#17A34A",textDecoration:"underline"}}>{product.title}</span>
    </div>
     <section className="product-detail">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-content">

        <span className="category">{product.category}</span>

        <h1>{product.title}</h1>

        <p className="description">
          {product.description}
        </p>

        <div className="price-rating">

          <h2>${product.price}</h2>

          <div className="rating">
            <CiStar />
            <span>{product.rating}</span>
          </div>

        </div>
        <div className="offer">
          {product.discountPercentage}% OFF
        </div>

        <div className="info-grid">

          <div>
            <strong>Brand</strong>
            <p>{product.brand}</p>
          </div>

          <div>
            <strong>Stock</strong>
            <p>{product.stock}</p>
          </div>

          <div>
            <strong>SKU</strong>
            <p>{product.sku}</p>
          </div>

          <div>
            <strong>Weight</strong>
            <p>{product.weight} g</p>
          </div>

          <div>
            <strong>Warranty</strong>
            <p>{product.warrantyInformation}</p>
          </div>

          <div>
            <strong>Shipping</strong>
            <p>{product.shippingInformation}</p>
          </div>

          <div>
            <strong>Availability</strong>
            <p>{product.availabilityStatus}</p>
          </div>

          <div>
            <strong>Return Policy</strong>
            <p>{product.returnPolicy}</p>
          </div>

        </div>

        <button onClick={handleAddToCart} className="cart-btn">
          Add to Cart
        </button>

      </div>

    </section>
    </>
   
  );
}

export default ProductDetail;