import React from 'react';
import { Link } from 'react-router-dom';
import './FaqPage.css'; // Make sure to create this CSS file

function FaqPage() {
  const faqs = [
    {
      question: "What should I consider before adopting a pet?",
      answer: "Make sure you're ready for a long-term commitment. Consider your lifestyle, space, time availability, and financial resources to provide proper care."
    },
    {
      question: "How do I adopt a pet from AMTM?",
      answer: "Browse available pets on our website, fill out the adoption form, and one of our team members will contact you for verification and further steps."
    },
    {
      question: "Are the pets vaccinated and neutered?",
      answer: "Yes, all pets are vaccinated, dewormed, and neutered/spayed before adoption unless they are too young. In such cases, future sterilization is mandatory."
    },
    {
      question: "Can I adopt if I live in a rented house?",
      answer: "Yes, but you must have your landlord’s permission. We may verify this to ensure pets are allowed in your accommodation."
    },
    {
      question: "Do I need to pay any adoption fee?",
      answer: "Yes, we charge a nominal adoption fee to cover basic medical care, food, and rehabilitation expenses. The exact amount will be shared during the adoption process."
    },
    {
      question: "Can I return the pet if it doesn’t work out?",
      answer: "We encourage responsible adoptions. However, in case of genuine concerns, the pet must be returned to AMTM and not given away to others."
    },
    {
      question: "Do you provide post-adoption support?",
      answer: "Yes, we’re here to help you transition smoothly. We provide advice on care, feeding, training, and veterinary support for adopted pets."
    }
  ];

  return (
    <div className="faq-page">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqPage;
