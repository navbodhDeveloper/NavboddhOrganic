import { useCart } from "../data/CartContext";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Shop Now</Link></p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>

                  <td>
                    <button className="qty-btn" onClick={() => decreaseQty(item.id)}>-</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>
                  </td>

                  <td>₹{item.price}</td>
                  <td>₹{item.price * item.quantity}</td>

                  <td>
                    <FaTrash
                      className="trash-icon"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="cart-total">Grand Total: ₹{total}</h3>

          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
