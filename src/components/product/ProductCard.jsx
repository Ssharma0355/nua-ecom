import "../../assets/ProductCard.scss";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function ProductCard({
  id,
  title,
  prodImg,
  category,
  rating,
  discount,
  price,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click

    console.log("Added to cart", id);

    // dispatch(addToCart(...))
    // or call your context function here
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img src={prodImg} alt={title} />

      <div className="product-info">
        <span className="category">{category}</span>

        <h3>{title}</h3>

        <div className="rating">
          <CiStar />
          <span>{rating}</span>
        </div>

        <div className="price-section">
          <h2>${price}</h2>
          <span className="discount">{discount}% OFF</span>
        </div>
      </div>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;