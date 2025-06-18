import React from 'react';
import './MedicalCare.css'; // Link to your CSS file
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
function MedicalCare() {
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
    <div className="medical-page">

      <section className="intro-section">
        <h2><strong>Providing continuous medical treatment and rehabilitation<br />for animals under AMTM’s care.</strong></h2>
        <p>
          Some animals come to us battered and broken, and while many recover and find new homes, others need long-term support.
          These resilient survivors—our permanent family—are with us for life. They have faced unimaginable hardships, from severe
          trauma and terminal illnesses to lifelong physical disabilities. At Animal Matter to Me (AMTM), we’re committed to giving
          them the care, love, and respect they deserve for as long as they need it.
        </p>
      </section>

      <section className="neutering-section">
        <h2><strong>How We Ensure Safe and Effective Neutering</strong></h2>
        <p>
          At AMTM, every animal we rescue is treated with care and dignity. Our trained veterinarians conduct sterilizations
          using the latest medical practices, ensuring that the procedure is safe, effective, and as stress-free as possible for the animals.
        </p>
        <p>Each neutered animal receives:</p>
        <ul>
          <li><strong>Pre-surgery check-ups</strong> to ensure they are healthy enough for the procedure.</li>
          <li><strong>Post-operative care</strong> with a clean and quiet recovery space.</li>
          <li>Necessary <strong>vaccinations</strong> to protect against rabies and other infectious diseases.</li>
        </ul>
        <p>
          We also monitor the animals for a few days after surgery to ensure a full recovery before they are released back into
          their familiar environments or moved to shelters for adoption.
        </p>
      </section>

      <section className="support-section">
        <h2><strong>Your Support is Their Lifeline</strong></h2>
        <p>
          By sponsoring a day of care, you help provide essential food, medical treatments, and enrichment activities for our
          permanent residents. Every contribution, no matter how small, makes a significant impact.
        </p>
        <p>
          For those looking to make a deeper commitment, consider a monthly sponsorship. Your support ensures that our most
          vulnerable animals receive uninterrupted care, from regular vet visits to daily meals and companionship.
        </p>
      </section>

      <section className="image-gallery">
        <div className="image-row">
          <img src="https://amtmindia.org/wp-content/uploads/2024/10/6-3.png" alt="Injured dog leg" />
          <img src="https://amtmindia.org/wp-content/uploads/2024/10/4-3.png" alt="Dog on operation bed" />
        </div>
        <div className="image-caption">
          <div className="image-text">
            <img src="https://amtmindia.org/wp-content/uploads/2024/09/68-1024x576.png" alt="Dog being operated" />
            <p>
              Many of our animals have specific dietary needs due to their conditions. From high-protein meals for those with
              weakened muscles to special food for those with digestive issues, each diet is carefully planned. Regular check-ups,
              medications, and treatments are essential to manage chronic conditions, alleviate pain, and improve their quality of life.
            </p>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}

export default MedicalCare;
