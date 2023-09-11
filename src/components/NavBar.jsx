// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';  // Import the CSS file

const NavBar = () => {
  return (
    <nav className="nav"> {/* Use className instead of style */}
      <div className="logo-container">
        <h1 className='Logo'>Kama</h1>
        <h1 className='Logo2'>vindi</h1>
      </div>
      <ul className="nav-list"> {/* Use className instead of style */}
        <li className="nav-item"> {/* Use className instead of style */}
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item"> 
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item"> 
          <Link to="/photos">Photos</Link>
        </li>
        <li className="nav-item"> 
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
