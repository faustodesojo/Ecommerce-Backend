import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="images/logo.png" alt="Logo" className="navbar-logo-img" />
        <Link to="/">Alambrados Belgrano</Link>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setIsOpen(false)}>Productos</Link></li>
        <li><Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link></li>
        <li><Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link></li>
      </ul>
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="navbar-toggle-icon"></div>
        <div className="navbar-toggle-icon"></div>
        <div className="navbar-toggle-icon"></div>
      </div>
    </nav>
  );
};

export default Navbar;
