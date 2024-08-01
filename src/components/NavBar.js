import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-button">HOME</Link>
      <Link to="/category" className="nav-button">CATEGORY</Link>
      <Link to="/productpage" className="nav-button">SAREE</Link>
      <Link to="/help" className="nav-button">HELP</Link>
    </nav>
  );
};

export default Navbar;
