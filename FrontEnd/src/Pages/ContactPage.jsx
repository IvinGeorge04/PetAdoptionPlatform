import React from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function ContactPage() {
  return (
    <>
      <header className="header">
        <Sidebar />
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1148570769/vector/veterinary-clinic-vector-logo.jpg?s=612x612&w=0&k=20&c=soi94tMr2NiMQ9b9X48p4OMW3V2i7JlGORDfCNBEUSs="
          alt="Clinic Logo"
        />
        <h1>Pawfect Match</h1>
        <nav className="nav">
          <Link to="/"><button>Home</button></Link>
          <Link to="/about"><button>About</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
          <Link to="/SignUp"><button>SignUp</button></Link>
        </nav>
      </header>

      {/*  Flex container to place address & image side by side */}
      <div className="contact-flex">
        <section className="con">
          <h3>Address:</h3>
          <p>MARS International India Pvt. Ltd.</p>
          <p>Survey No. 56/64, Gauraram Village,</p>
          <p>Behind Janatha Hotel, Wargal Momndal,</p>
          <p>Kochi District, Kerala, 602279</p>

          <h3>Email:</h3>
          <p>contact@pawfectmatch.com</p>
        </section>

        <img
          id="i6"
          src="https://img.freepik.com/free-photo/view-cats-dogs-being-friends_23-2151806359.jpg?semt=ais_hybrid&w=740"
          alt="Campus View"
        />
      </div>

      {/* Social Links */}
      <div id="d2">
        <a href="https://www.instagram.com/amtmindia/" target="_blank" rel="noopener noreferrer">
          <img id="i3" src="https://i.pinimg.com/474x/1e/d6/e0/1ed6e0a9e69176a5fdb7e090a1046b86.jpg" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/amtmindia" target="_blank" rel="noopener noreferrer">
          <img id="i4" src="https://static.vecteezy.com/system/resources/previews/042/127/197/non_2x/app-style-blue-facebook-logo-with-white-thick-border-and-long-shadow-on-a-transparent-background-free-png.png" alt="Facebook" />
        </a>
        <a href="https://x.com/amtmindia" target="_blank" rel="noopener noreferrer">
          <img id="i5" src="https://i.pinimg.com/474x/7d/44/d5/7d44d55ead7dda48bd95632d92fb259d.jpg" alt="Twitter" />
        </a>
      </div>
    </>
  );
}

export default ContactPage;
