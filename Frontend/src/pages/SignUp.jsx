import React from 'react';
import './SignUp.css'; 

function LoginPage() {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <p className="login-subtitle">Welcome back.</p>


      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Email" required />

        <label>
          Password
          <a href="/" className="forgot-link">Forgot your password?</a>
        </label>
        <input type="password" placeholder="Password" required />

        <button type="submit" className="login-btn">Login</button>
      </form>

      <div className="signup-box">
        Don’t have an account? <a href="/join">Join</a>
      </div>
    </div>
  );
}

export default LoginPage;
