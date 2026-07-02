import { FaTimes } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import "../assets/Cart.scss";

function Cart({ onClose }) {
  const { cart, dispatch } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside
        className="cart-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-header">
          <h2>Shopping Cart</h2>

          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty 🛒</p>
          </div>
        ) : (
          <>
            <div className="cart-body">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                  />

                  <div className="details">
                    <h4>{item.title}</h4>

                    <p className="price">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="quantity">
                      <button
                        onClick={() =>
                          dispatch({
                            type: "DECREMENT",
                            payload: item.id,
                          })
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          dispatch({
                            type: "INCREMENT",
                            payload: item.id,
                          })
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item.id,
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bill">
              <div className="row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="row">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="total">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default Cart;