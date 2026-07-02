import "../assets/Cart.scss"
import { FaTimes } from "react-icons/fa";

function Cart({ onClose }) {
  return (
    <div className="cart-overlay" onClick={onClose}>
      <div
        className="cart-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <h2>Cart</h2>

        {/* Cart Items */}

      </div>
    </div>
  );
}

export default Cart;