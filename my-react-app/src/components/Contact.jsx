import React from 'react';

function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919047512050', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/ayascarseats', '_blank');
  };

  const handleLocationClick = () => {
    // Opens Google Maps with the location coordinates (you can update with your actual address)
    window.open('https://maps.google.com/?q=AYAS+Car+Seats+Showroom+Main+Auto+Market+Car+City', '_blank');
  };

  return (
    <div className="page-section">
      <h1 className="section-title">Contact Us</h1>
      <p className="section-intro">Have questions? We'd love to hear from you.</p>
      <div className="contact-container">
        <div className="contact-form-section">
          <h3>Quick Contact</h3>
          <p>Get in touch with us instantly through our social media channels for quick responses!</p>
          <div className="social-contact">
            <button 
              onClick={handleWhatsAppClick}
              className="social-btn whatsapp-btn"
              aria-label="Contact us on WhatsApp"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm3.24 11.77c-.24.66-1.4 1.33-1.96 1.4-.54.07-.93.03-1.53-.28-.6-.31-2.68-1.05-3.08-2.94-.4-1.9.53-2.94.8-3.24.27-.3.6-.33.8-.24.2.09.33.4.53.66.2.26.24.44.48.44.24 0 .4-.11.6-.33.2-.22.93-1.08 1.13-1.4.2-.33.4-.27.66-.16.27.11 1.13.53 1.33 1.53.2 1-.2 1.66-.44 2-.24.33-1.4.93-1.96 1.4-.56.46-.93.73-1.13.8-.2.07-.33.03-.53-.16z"/>
              </svg>
              <span>WhatsApp</span>
            </button>
            <button 
              onClick={handleInstagramClick}
              className="social-btn instagram-btn"
              aria-label="Follow us on Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </button>
          </div>
          <p className="response-time">⚡ Quick Response Time</p>
        </div>
        <div className="contact-info">
          <h3>Our Information</h3>
          <p><strong>Address:</strong> 123 Auto Lane, Car City, PK</p>
          <p><strong>Email:</strong> contact@ayascarseats.com</p>
          <p><strong>Phone:</strong> +91 90475 12050</p>
          <div className="map-location">
            <div className="map-pin">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#e74c3c">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="location-details" onClick={handleLocationClick} style={{ cursor: 'pointer' }}>
              <p className="location-title">AYAS Car Seats </p>
              <p className="location-address">No:4,South Ukkadam, New Lorry Stand, Coimbatore</p>
              <p className="location-hours">Mon-Sat: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;