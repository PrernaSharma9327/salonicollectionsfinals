import React from 'react';
import logo from '../images/logo.png';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Correct import
import '../index.css';

const Header = ({ setPage }) => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Saloni Collections" className="logo" />
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <FaSearch className="search-icon" />
        </div>
        <div className="header-icons">
          <Link to="/signup"> signup</Link> {/* Corrected path */}
          <FaShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
