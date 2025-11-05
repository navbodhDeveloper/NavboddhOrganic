import  { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import React, { useEffect } from "react";
import { scrollReveal } from "../scrollAnimation";

function Register() {
    useEffect(() => {
        scrollReveal();
      }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Registration logic can be added here
    alert(`Account created for ${name} (${email})`);
  };

  return (
    <div className="login-page scroll-reveal " data-direction="right">
      <h2>Sign Up</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-btn">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login"  style={{color:"#3C9A5F"}}>Login here</Link>
      </p>
    </div>
  );
}

export default Register;
