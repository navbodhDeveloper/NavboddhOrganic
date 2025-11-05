import { Link } from "react-router-dom";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import "../App.css";
import React, { useEffect } from "react";
import { scrollReveal } from "../scrollAnimation";

function Cart() {
  // Dummy cart items (replace with state later)
  useEffect(() => {
        scrollReveal();
      }, []);
  const cartItems = [
    { id: 1, name: "Organic Ghee", price: 250, quantity: 1 },
    { id: 2, name: "Mango", price: 120, quantity: 2 },
  ];

  return (
    <div className="cart-page scroll-reveal"  data-direction="right">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Shop Now</Link></p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>{item.quantity}</td>
                <td><FaTrash className="trash-icon" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cartItems.length > 0 && (
        <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
      )}
    </div>
  );
}

export default Cart;
