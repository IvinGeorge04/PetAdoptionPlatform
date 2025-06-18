import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';
import Sidebar from './Sidebar';

function AboutPage() {
  return (
    <div className="about-page">
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

      <div className="about-content">
        <img src="https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg" alt="Campus" />
        <h2><i>Giving Voiceless Animals a Second Chance at Life</i></h2>
        <p><i>Pawfect Match is a non-profit organization dedicated to the rescue, care, and rehabilitation of injured, stray, and abandoned animals across India. Since our inception, we have been at the forefront of providing medical assistance, shelter, and lifelong support to animals who have no other means of survival. From neutering to vaccination drives and emergency rescue operations, our team is committed to ensuring the welfare and dignity of animals that have no voice of their own. Every animal we save is a life that matters to us. Pawfect Match has been proudly awarded the Certificate of Membership by the Federation of Indian Animal Protection Organisations (FIAPO). This recognition highlights our unwavering commitment to the animal protection movement and our dedication to creating a safer and more compassionate world for animals. By joining hands with FIAPO, we continue to strive for impactful changes in animal welfare.</i></p>
      </div>
      <Testimonial></Testimonial>
    </div>
  );
}

export default AboutPage;
