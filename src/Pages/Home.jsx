import { Link } from "react-router-dom";
import "../App.css";
import React, { useEffect } from "react";
import { scrollReveal } from "../scrollAnimation";

function Home() {
  useEffect(() => {
    scrollReveal();
  }, []);
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Fresh Organic Products</h1>
          <p>Delivering health and nature to your doorstep.</p>
          <Link to="/products" className="shop-btn">Shop Now</Link>
        </div>
        <div className="hero-img">
          <img 
            src="../assets/Banner two.webp" 
            alt="Organic"  
            style={{ width: "100%", height: "auto", cursor: "pointer",   borderRadius:"20px",marginTop: "2em"}}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features scroll-reveal" data-direction="left">
        <div className="feature">
          <h3>100% Organic</h3>
          <p>Pure and natural products without chemicals.</p>
        </div>
        <div className="feature">
          <h3>Fresh Delivery</h3>
          <p>Products delivered fresh to your home.</p>
        </div>
        <div className="feature">
          <h3>Best Quality</h3>
          <p>We ensure premium quality organic products.</p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products scroll-reveal" data-direction="right">
        <h2>Our Top Products</h2>
        <div className="product-grid">
          {/* Example of 4 products (can map from products array) */}
          <div className="product-card">
            <img src="../assets/ghee.webp" alt="Ghee" />
            <h4>Organic Ghee</h4>
            <Link to="/products/1" className="details-btn">Details</Link>
          </div>
          <div className="product-card">
            <img src="../assets/Mango.webp" alt="Mango" />
            <h4>Organic Mango</h4>
            <Link to="/products/2" className="details-btn">Details</Link>
          </div>
          <div className="product-card">
            <img src="../assets/orange.avif" alt="Orange" />
            <h4>Organic Orange</h4>
            <Link to="/products/3" className="details-btn">Details</Link>
          </div>
          <div className="product-card">
            <img src="../assets/honey.webp" alt="Honey" />
            <h4>Organic Honey</h4> 
            <Link to="/products/4" className="details-btn">Details</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials scroll-reveal" data-direction="left">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"Best organic products I've ever bought! Highly recommend."</p>
            <h4>- Priya K.</h4>
          </div>
          <div className="testimonial">
            <p>"Fresh and delicious. Fast delivery too."</p>
            <h4>- Rajesh M.</h4>
          </div>
          <div className="testimonial">
            <p>"Quality is top-notch. Will order again!"</p>
            <h4>- Sneha P.</h4>
          </div>
          <div className="testimonial">
            <p>"Best organic products I've ever bought! Highly recommend."</p>
            <h4>- Priya K.</h4>
          </div>
          <div className="testimonial">
            <p>"Fresh and delicious. Fast delivery too."</p>
            <h4>- Rajesh M.</h4>
          </div>
          <div className="testimonial">
            <p>"Quality is top-notch. Will order again!"</p>
            <h4>- Sneha P.</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="cta-banner">
        <h2>Get Your Fresh Organic Products Today!</h2>
        <Link to="/products" className="shop-btn">Shop Now</Link>
      </section>

    </div>
  );
}

export default Home;
