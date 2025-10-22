import React, { useState } from 'react';

const LOGO_SRC = '/.acslogo.jpeg'; // Assuming you have this in your public folder
const FALLBACK_LOGO = 'https://placehold.co/200x200/ffffff/0f172a?text=ACS';

function ImageWithFallback({ src, fallback = FALLBACK_LOGO, alt = '' }) {
  const [imgSrc, setImgSrc] = React.useState(src);
  return <img src={imgSrc} alt={alt} className="header-logo" onError={() => setImgSrc(fallback)} />;
}

function Header({ route, navigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/catalogue', name: 'Catalogue' },
    { path: '/why-ayas', name: 'Why Ayas?' },
    { path: '/contact', name: 'Contact' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-brand" onClick={() => handleNavigate('/')}>
        <ImageWithFallback src={LOGO_SRC} alt="Ayas Car Seats Logo" />
        <div>
          <div className="header-title">Ayas Car Seats</div>
          <div className="header-subtitle">Travel with comfort</div>
        </div>
      </div>

      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <button
            key={link.path}
            className={`header-nav-link ${route === link.path ? 'active' : ''}`}
            onClick={() => handleNavigate(link.path)}
          >
            {link.name}
          </button>
        ))}
      </nav>

      <button className="header-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </header>
  );
}

export default Header;