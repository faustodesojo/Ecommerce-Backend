import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src="images/logo.png" alt="Logo" className="navbar-logo-img" />
        <Link to="/">Alambrados Belgrano</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
