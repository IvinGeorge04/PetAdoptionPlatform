import React from 'react';
import './Laws.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function Laws() {
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
    <div className="laws-section">
      <div
  className="laws-hero"
  style={{
    backgroundImage: `url("https://t4.ftcdn.net/jpg/08/90/77/41/360_F_890774161_3nw2ccnPnGGLHj48pZDgISdg0jplb1TJ.jpg")`,
  }}
>

        <h1 className="laws-title">
          Laws <span className="paw-prints">🐾🐾</span>
        </h1>
      </div>

      <div className="laws-content">
        <h3 className="laws-subheading">
          <span className="dash">―</span> UNDERSTANDING THE LEGAL FRAMEWORK THAT SAFEGUARDS ANIMAL RIGHTS IN INDIA
        </h3>
        <h1 className="main-heading">
          ANIMAL PROTECTION LAWS <span className="highlight">& LEGAL RESOURCES</span>
        </h1>
        <p className="laws-paragraph">
          At Pawfect Match, protecting animals goes far beyond rescue and rehabilitation—it includes awareness and enforcement
          of the laws that are designed to safeguard their lives. India has a strong legal framework for animal
          welfare, but due to limited awareness, many violations go unnoticed or unchallenged.
        </p>
        <p className="laws-paragraph">
          To empower individuals, volunteers, civic authorities, and animal lovers, this section provides key legal
          insights into how animals are protected under Indian law. Whether the goal is to take action, report cruelty,
          or educate others, having access to accurate legal knowledge is essential.
        </p>
        <p className="laws-paragraph">
          Explore the essential handbooks and resources below to better understand how to stand up for the voiceless
          and uphold their rights under the law.
        </p>
      </div>
    </div>
    </>
  );
}

export default Laws;
