import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/Laws">⚖️Laws</Link></li>
          <li><Link to="/PawsAndPeace">🐾Paws&Peace</Link></li>
          <li><Link to="/MedicalCare">🦴MedicalCare</Link></li>
          <li><Link to="/FaqPage">🗨️FAQs</Link></li>
        </ul>
      </div>

      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
    </>
  );
}

export default Sidebar;

