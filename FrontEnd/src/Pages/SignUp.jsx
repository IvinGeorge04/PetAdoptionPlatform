import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // const res = await fetch(${import.meta.env.VITE_BACKEND_URL}/api/auth/signup, {
      const res = await fetch('https://petadoptionplatform-backend.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Signup failed');
      } else {
        alert('Signup successful!');
        navigate('/');
      }
    } catch (err) {
      console.error('Signup error:', err);
      alert('Something went wrong');
    }
  };

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
                <Link to="/Login"><button>Login</button></Link>
              </nav>
            </header>
    
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
      <p className="signup-subtitle">Create your account.</p>

      <form onSubmit={handleSubmit} className="signup-form">
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
              value={formData.username}
              onChange={handleChange}

        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
              value={formData.password}
              onChange={handleChange}
              
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
              value={formData.confirmPassword}
              onChange={handleChange}
        />

        <button type="submit" className="signup-btn">Signup</button>
      </form>

      <div className="login-box">
        Already have an account? <Link to="/Login">Login</Link>
      </div>
    </div>
    </>
  );
}

export default Signup;
