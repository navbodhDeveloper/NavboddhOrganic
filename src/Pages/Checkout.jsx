import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import products from "../data/products";

function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/"); // redirect to home
  };

  // For demo, let's show all products as cart items
  const cartItems = products.slice(0, 3); // replace with real cart data

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-wrapper">
        <form className="billing-form" onSubmit={handlePlaceOrder}>
          <h3>Billing Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={handleChange}
            required
          />

          <h3>Payment Details</h3>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="expiry"
            placeholder="Expiry MM/YY"
            value={formData.expiry}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
          <button type="submit" className="place-order-btn">Place Order</button>
        </form>

        <div className="order-summary">
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <hr />
          <div className="summary-total">
            <strong>Total:</strong>
            <strong>₹{total}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
