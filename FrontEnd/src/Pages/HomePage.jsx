import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Sidebar from './Sidebar';

function HomePage() {
  return (
    <>
    
    <div className="homepage">
      <header className="header">
        <Sidebar></Sidebar>
        <img className="logo" src="https://media.istockphoto.com/id/1148570769/vector/veterinary-clinic-vector-logo.jpg?s=612x612&w=0&k=20&c=soi94tMr2NiMQ9b9X48p4OMW3V2i7JlGORDfCNBEUSs=" alt="College Logo" />
        <h1>Pawfect Match</h1>
        <nav className="nav">
          <Link to="/"><button>Home</button></Link>
          <Link to="/about"><button>About</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
          <Link to="/SignUp"><button>SignUp</button></Link>
        </nav>
      </header>

      <img className="campus-img" src="https://149648348.v2.pressablecdn.com/wp-content/uploads/2024/07/Challenges-That-Helped-Me-Become-a-Better-Pet-Owner-1024x682.webp" alt="College Campus" />

      <section className="vision-section">
        <h2>Transforming🐾Lives Pawfectly</h2>
        <p><i>
           Welcome to Pawfect Match – Where Every Paw Finds Its Perfect Home! 
At Pawfect Match, we believe every animal deserves a chance at love and a forever home. Whether you're dreaming of a playful pup, a gentle senior dog, a curious kitten, or a cuddly cat — we’re here to help you find your pawfect companion.

<p>We work hand-in-paw with trusted shelters, rescue groups, and foster families to bring rescued pets one step closer to their happy ending — with you!</p>

🐾 Why Choose Pawfect Match?
 Save a life and gain a loyal best friend

🐾 Browse real stories and photos of pets waiting to be loved

🩺 All pets are vet-checked, vaccinated, and adoption-ready
        </i></p>
      </section>

      <div className='why'>
        <h2><i>Why Choose Pawfect Match?</i></h2>
        <p>
          Did you know that over 2000 people per hour in India run a search right here looking to adopt a pet? Pet adoption is becoming the preferred way to find a new pet. Adoption will always be more convenient than buying a puppy for sale from a pet shop or finding a kitten for sale from a litter. Pet adoption brings less stress and more savings! So what are you waiting for? Go find that perfect pet for home! Save a life and gain a loyal best friend
 Browse real stories and photos of pets waiting to be loved

 All pets are vet-checked, vaccinated, and adoption-ready
        </p>
        <h3><i> What You'll Find Here</i></h3>
        <p> Easy-to-navigate listings by pet type, age, and location

Helpful resources to prepare your home and heart. The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family

 A community that supports ethical, responsible adoption</p>

      </div>

      <section className="offerings">
        <h2>Need a Companion?</h2>

        <Link to="/Cat"><button className="heart-button"><span>🐱 CATS</span></button></Link>
        <Link to="/Dog"><button className="heart-button"><span>🐶 DOGS</span></button></Link>

      </section>

      <footer className="footer">
        <span>&copy;Pawfect match</span>
        <a href="https://www.instagram.com/amtmindia/"><img src="https://i.pinimg.com/originals/21/d6/7f/21d67f1d6b3be5bb2e39395311c77fc6.jpg" alt="Instagram" /></a>
        <a href="https://www.facebook.com/amtmindia"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" /></a>
        <a href="https://x.com/amtmindia"><img src="https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png" alt="Twitter" /></a>
      </footer>
    </div>
    </>
  );
}

export default HomePage;
