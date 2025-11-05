import { Link } from "react-router-dom";
import products from "../data/products";
import "../App.css";
import React, { useEffect } from "react";
import { scrollReveal } from "../scrollAnimation";

function Products() {
  useEffect(() => {
      scrollReveal();
    }, []);
  return (
    <div className="products-container scroll-reveal" data-direction="left">
      {products.map(product => (
        <div className="product-card " key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h4 className="product-name">{product.name}</h4>
          <Link to={`/products/${product.id}`} className="details-btn">
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
