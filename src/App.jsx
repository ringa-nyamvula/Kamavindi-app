// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Photos from './components/Photos';
import Contacts from './components/Contacts';
import Frame from './components/Frame';


const App = () => {
  return (
    <Router>
    <div>
      <NavBar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/about" element={<About />} /> {/* Use 'element' prop */}
        <Route path="/photos" element={<Photos />} /> {/* Use 'element' prop */}
        <Route path="/contacts" element={<Contacts />} /> {/* Use 'element' prop */}
        <Route path="/" element={<Home />} /> {/* Use 'element' prop */}
        <Route path="/frame" element={<Frame />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
