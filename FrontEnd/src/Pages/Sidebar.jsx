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
          <li><a href="Laws">⚖️Laws</a></li>
          <li><a href="PawsAndPeace">Paws&Peace</a></li>
          <li><a href="MedicalCare">MedicalCare</a></li>
          <li><a href="FagPage">FAQs</a></li>
        </ul>
      </div>

      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
    </>
  );
}

export default Sidebar;

