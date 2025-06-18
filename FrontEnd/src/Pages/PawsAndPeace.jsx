import React from 'react';
import './PawsAndPeace.css';
import Sidebar from './Sidebar';
import './Sidebar.css';
import { Link } from 'react-router-dom';
function PawsAndPeace() {
  const imageUrls = [
    'https://amtmindia.org/wp-content/uploads/2024/10/IMG-20240925-WA0317.jpg',
    'https://amtmindia.org/wp-content/uploads/2024/10/IMG-20240925-WA0318.jpg',
    'https://amtmindia.org/wp-content/uploads/2024/11/DJI_0177.jpg',
    'https://amtmindia.org/wp-content/uploads/2024/11/DJI_0192.jpg',
    'https://amtmindia.org/wp-content/uploads/2024/10/IMG-20240925-WA0380.jpg',
    'https://amtmindia.org/wp-content/uploads/2024/10/IMG-20240925-WA0383.jpg',
    'https://amtmindia.org/wp-content/uploads/2024/10/IMG-20240925-WA0133.jpg',
    'https://amtmindia.org/wp-content/uploads/2024/10/IMG-20240925-WA0328.jpg',
  ];

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
    <div className="animal-haven">
        
      <h3 className="subheading">
        ― <span className="highlight-text">A SANCTUARY FOR CARE AND HEALING</span>
      </h3>
      <h1 className="main-title">
        Paws &<span className="highlight-title">Peace</span>
      </h1>
      <p className="description">
        It's an Open Sanctuary in Kolad, Raigad. An over two-hectare hillside refuge and hospice in the village of Vitthalwadi, near Kolad.
      </p>
      <p className="description">
        Home to 250+ street animals (cats, dogs, cows, pigs, geese, rabbits etc.) who cannot survive on street due to various reasons like blindness, handicapped,
        aggressive behavior, abandoned or unknown native location etc. All these animals live the rest of their lives amidst Nature. They are fed healthy food twice a
        day. They are vaccinated, sterilized and given medical care.
      </p>

      <div className="gallery">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Animal ${index + 1}`} className="gallery-img" />
        ))}
      </div>
    </div>
    </>
  );
}

export default PawsAndPeace;
