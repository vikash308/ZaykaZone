import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We deliver tasty and healthy meals from breakfast to dinner. Follow us for updates!</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Snacks</li>
            <li>Dinner</li>
            <li>All Items</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 YourCompany. Made with <span>❤️</span> by Vikash</p>
      </div>
    </footer>
  );
};

export default Footer;
