import React from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <>

      <header className="header">
        <img className="logo" src="https://media.istockphoto.com/id/1148570769/vector/veterinary-clinic-vector-logo.jpg?s=612x612&w=0&k=20&c=soi94tMr2NiMQ9b9X48p4OMW3V2i7JlGORDfCNBEUSs=" alt="College Logo" />
        <h1>Pawfect Match</h1>
        <nav className="nav">
          <Link to="/"><button>Home</button></Link>
          <Link to="/about"><button>About</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
          <Link to="/SignUp"><button>Login</button></Link>
        </nav>
      </header>

      <div id="d2">
        <a href="https://www.instagram.com/amtmindia/" target="_blank" rel="noopener noreferrer">
          <img
            id="i3"
            src="https://i.pinimg.com/474x/1e/d6/e0/1ed6e0a9e69176a5fdb7e090a1046b86.jpg"
            alt="Instagram"
          />
        </a>
        <a href="https://www.facebook.com/amtmindia" target="_blank" rel="noopener noreferrer">
          <img
            id="i4"
            src="https://static.vecteezy.com/system/resources/previews/042/127/197/non_2x/app-style-blue-facebook-logo-with-white-thick-border-and-long-shadow-on-a-transparent-background-free-png.png"
            alt="Facebook"
          />
        </a>
        <a href="https://x.com/amtmindia" target="_blank" rel="noopener noreferrer">
          <img
            id="i5"
            src="https://i.pinimg.com/474x/7d/44/d5/7d44d55ead7dda48bd95632d92fb259d.jpg"
            alt="Twitter"
          />
        </a>
      </div>

      <img
        id="i6"
        src="https://t3.ftcdn.net/jpg/06/38/69/12/360_F_638691287_sSY3HcDjVZ1tKNL971kT70T1YnrC3mvm.jpg"
        alt="Campus View"
        width="100%" height="auto"
      />
    </>
  );
}

export default ContactPage;
