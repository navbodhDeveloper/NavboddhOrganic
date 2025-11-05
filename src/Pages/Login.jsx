import  { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import React, { useEffect } from "react";
import { scrollReveal } from "../scrollAnimation";

function Login() {
  useEffect(() => {
      scrollReveal();
    }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // You can add authentication logic here
    alert(`Logging in with Email: ${email} Password: ${password}`);
  };

  return (
    <div className="login-page scroll-reveal " data-direction="right">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-btn">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register" style={{color:"#3C9A5F"}}>Register here</Link>
      </p>
    </div>
  );
}

export default Login;
