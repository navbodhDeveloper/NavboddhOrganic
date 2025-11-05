import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import "./ProductCard.css";

function ProductCard({ name, price, img }) {
  return (
    <div className="product-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button>
        <FaShoppingBag /> Add to Cart
      </button> 
    </div>
  );
}

export default ProductCard;
