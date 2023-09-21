// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';  // Import the CSS file

const NavBar = () => {
  return (
    <nav className="nav"> {/* Use className instead of style */}
        <div className="logo">
          <div className="overlap-group-2">
            <div className="text-wrapper-2">K</div>
            <div className="text-wrapper-3">ama</div>
            <div className="text-wrapper-4">vindi</div>
          </div>
        </div>
      <ul className="nav-list"> {/* Use className instead of style */}
        <li className="nav-item"> {/* Use className instead of style */}
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-item"> 
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="nav-item"> 
          <Link to="/photos">PHOTOS</Link>
        </li>
        <li className="nav-item"> 
          <Link to="/contacts">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
