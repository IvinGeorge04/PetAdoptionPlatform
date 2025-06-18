import React from 'react';
import './SignUp.css'; 
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
     <header className="header">
      <Sidebar></Sidebar>
              <img className="logo" src="https://media.istockphoto.com/id/1148570769/vector/veterinary-clinic-vector-logo.jpg?s=612x612&w=0&k=20&c=soi94tMr2NiMQ9b9X48p4OMW3V2i7JlGORDfCNBEUSs=" alt="College Logo" />
              <h1>Pawfect Match</h1>
              <nav className="nav">
                <Link to="/"><button>Home</button></Link>
                <Link to="/about"><button>About</button></Link>
                <Link to="/contact"><button>Contact</button></Link>
                <Link to="/SignUp"><button>Login</button></Link>
              </nav>
            </header>
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
    </>
  );
}

export default LoginPage;
