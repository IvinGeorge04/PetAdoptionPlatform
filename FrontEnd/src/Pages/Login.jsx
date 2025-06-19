import React from 'react';
import './Login.css'; 
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
          e.preventDefault();
      
          try {
            // ✅ Updated to include full login path
            // const response = await axios.post(${import.meta.env.VITE_BACKEND_URL}/api/auth/login, {
            const response = await axios.post('http://localhost:3500/api/auth/login', {
              username,
              password,
            });
      
            const { token, username: user } = response.data;
      
            localStorage.setItem('token', token);
            localStorage.setItem('username', user);
      
            navigate('/');
          } catch (error) {
            if (error.response) {
              alert(error.response.data.error);
            } else {
              alert('Login failed. Please try again.');
            }
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
                <Link to="/SignUp"><button>Login</button></Link>
              </nav>
            </header>

    <div className="login-container">
     
      <h2 className="login-title">Login</h2>
      <p className="login-subtitle">Welcome back.</p>


      <form onSubmit={handleSubmit} className="login-form">
        <label>Username</label>
        <input type="text" placeholder="Username" value={username}
                        onChange={(e) => setUsername(e.target.value)} required />

        <label>
          Password
          {/* <a href="/" className="forgot-link">Forgot your password?</a> */}
        </label>
        <input type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" className="login-btn">Login</button>
      </form>

      <div className="signup-box">
        Don’t have an account? <a href="SignUp">SignUp</a>
      </div>
    </div>
    </>
  );
}

export default Login;
