import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">YearPredictor</div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/developer" className="nav-link" onClick={() => setMenuOpen(false)}>Developer</NavLink>
          <NavLink to="/sponsor" className="nav-link" onClick={() => setMenuOpen(false)}>Sponsor</NavLink>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? 'rotate' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'hide' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'rotate-reverse' : ''}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
