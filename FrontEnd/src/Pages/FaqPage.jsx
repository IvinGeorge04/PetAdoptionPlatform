import React, { useState } from 'react';
import './FaqPage.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const faqData = [
  {
    question: 'What are the basic requirements to adopt a pet?',
    answer: 'You should be at least 18 years old, capable of providing a safe and loving home, and willing to commit to the pet’s lifetime care.'
  },
  {
    question: 'How long does the adoption process take?',
    answer: 'The process can take from a few days to a couple of weeks depending on screening, home checks, and pet availability.'
  },
  {
    question: 'Is there an adoption fee?',
    answer: 'Yes, a small fee helps cover vaccinations, neutering, and initial medical check-ups.'
  },
  {
    question: 'Can I adopt if I live in a rented house?',
    answer: 'Yes, but you may need a letter of permission from your landlord before proceeding.'
  },
  {
    question: 'What if the pet doesn’t adjust to my home?',
    answer: 'We offer support and guidance. If needed, we can discuss rehoming responsibly.'
  }
];

function FaqPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
          <Link to="/SignUp"><button>SignUp</button></Link>
        </nav>
      </header>
    <div className="faq-container">
      <div className="faq-left">
        <h1 className="faq-title">FAQ</h1>
        <p className="faq-description">
          Thinking about adopting a pet? We’ve compiled answers to some of the most common questions adopters have
          before bringing a new furry friend home.
        </p>
        <img  src="https://iadopt.in/wp-content/uploads/2020/02/home_dog.png" alt="Faq img" />
      </div>

      <div className="faq-right">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
              <button className="faq-button">{item.question}</button>
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default FaqPage;
