import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Ayas Car Seats</h4>
          <p>Your trusted partner in automotive comfort and safety.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#/">Home</a></li>
            <li><a href="#/catalogue">Catalogue</a></li>
            <li><a href="#/why-ayas">Why Ayas?</a></li>
            <li><a href="#/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          {/* Replace with actual links */}
          <div className="social-links">
            <a href="#">Facebook</a> | <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Ayas Car Seats. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;