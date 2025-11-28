import { useCart } from "../data/CartContext";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-wrapper">

        {/* BILLING DETAILS */}
        <form className="billing-form" onSubmit={handlePlaceOrder}>
          <h3>Billing Details</h3>

          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
          <input type="text" placeholder="Zip Code" required />

          {/* PAYMENT METHOD SECTION */}
          <h3>Payment Method</h3>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit / Debit Card
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI (Google Pay, PhonePe)
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery (COD)
          </label>

          {/* CONDITIONAL PAYMENT INPUTS */}

          {paymentMethod === "card" && (
            <div className="payment-box">
              <input type="text" placeholder="Card Number" required />
              <input type="text" placeholder="Expiry Date (MM/YY)" required />
              <input type="text" placeholder="CVV" required />
            </div>
          )}

          {paymentMethod === "upi" && (
            <div className="payment-box">
              <input type="text" placeholder="UPI ID (example@upi)" required />
            </div>
          )}

          {/* BUY NOW BUTTON */}
          <button type="submit" className="place-order-btn">
            Pay Now / Buy Now
          </button>
        </form>

        {/* ORDER SUMMARY */}
        <div className="order-summary">
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div key={item.id} className="summary-item">
              <span>{item.name} x {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <hr />

          <div className="summary-total">
            <strong>Total:</strong>
            <strong>₹{total}</strong>
          </div>

          {/* PROCEED TO PAYMENT BUTTON */}
          <button
            className="proceed-payment-btn"
            onClick={() => {
              window.scrollTo(0, 0);
              alert("Scroll to the payment section to continue");
            }}
          >
            Proceed to Payment
          </button>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
