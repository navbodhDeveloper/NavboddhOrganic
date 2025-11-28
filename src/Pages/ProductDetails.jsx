import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "../App.css";
import { useCart } from "../data/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id)); // <-- product defined here
  const [quantity, setQuantity] = useState(1); // <-- quantity defined here

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details-container">
      <div className="product-image-section">
        <img src={product.image} alt={product.name} className="product-detail-image" />
      </div>

      <div className="product-info-section">
        <h2 className="product-detail-name">{product.name}</h2>
        <p className="product-detail-description">{product.description}</p>
        <h3 className="product-detail-price">₹{product.price}</h3>

        <div className="quantity-section">
          <label>Quantity: </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product, quantity)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
