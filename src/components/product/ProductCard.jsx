import "../../assets/ProductCard.scss";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


function ProductCard({
  title,
  id,
  prodImg,
  category,
  rating,
  discount,
  stock,
  price,
}) {
  const navigate = useNavigate();
  return (
    <div 
    onClick={() => navigate(`/product/${id}`)}
     className="product-card">
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

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;