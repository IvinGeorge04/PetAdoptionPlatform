import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    text: `What Pawfect Match does for helpless animals is nothing short of extraordinary. They don’t just rescue animals; they heal them, rehabilitate them, and give them a second chance at life. Knowing that my donations go toward helping so many stray dogs and cats find a safe home makes me feel like I’m part of a bigger mission.`,
    name: 'Karishma Shah',
    role: 'Donor',
  },
  {
    text: `Pawfect Match’s work in sterilizing and vaccinating stray dogs and cats is phenomenal. I started donating after seeing their sterilization campaigns, and it’s amazing to witness how they are tackling the stray overpopulation issue in a humane way. The team is transparent, hardworking, and incredibly compassionate. They deserve all the support they can get!`,
    name: 'Rajesh Kumar',
    role: 'Donor',
  }
];

function Testimonial() {
  return (
    <div className="testimonials-section">
      <div className="section-title">
        <span className="highlight">— TESTIMONIALS</span>
        <h2>WHAT PEOPLE SAY ABOUT US</h2>
      </div>
      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">{t.text}</p>
            <h3 className="testimonial-name">{t.name}</h3>
            <p className="testimonial-role">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
