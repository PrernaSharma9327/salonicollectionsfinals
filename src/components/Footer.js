import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Shop</h4>
          <a href="">My account</a>
          <a href="#">Login</a>
          <a href="#">Wishlist</a>
          <a href="#">Cart</a>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <a href="#">Shipping Policy</a>
          <a href="#">Returns & Refunds</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Frequently asked</a>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#">About us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-subscribe">
        
          <input type="email" placeholder="Get latest offers to your inbox" />
          <button>Subscribe</button>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61559729487612"><FaFacebook className="social-icon facebook" /></a>
            <a href="https://www.instagram.com/salonicollections?igsh=bGxpMmVvZ2Ezamsy"><FaInstagram className="social-icon instagram" /></a>
            <a href="#"><FaTwitter className="social-icon twitter" /></a>
            <a href="#"><FaYoutube className="social-icon youtube" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; John Lewis plc 2001-2024</p>
        <div className="footer-language">
          <select>
            <option value="en">English</option>
            <option value="en">Hindi</option>
            
          </select>
          <select>
            <option value="usd">USD</option>
            
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;