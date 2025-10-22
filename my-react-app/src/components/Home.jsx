import React from 'react';
import YouTubeAutoplay from './YouTubeAutoplay';

const showcaseImages = import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

function Home({ navigate }) {
  const featuredProducts = Object.values(showcaseImages).slice(0, 4);

  const testimonials = [
    { name: 'Ali Khan', quote: 'The best car seat I have ever bought! My son loves it, and the quality is outstanding. Highly recommended.' },
    { name: 'Fatima Ahmed', quote: 'Excellent customer service and fast delivery. The floor mats fit perfectly in my car and are very durable.' },
    { name: 'Hassan Raza', quote: 'I was hesitant about buying seat covers online, but Ayas exceeded my expectations. They look and feel premium.' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Engineered for Comfort, Designed for Life</h1>
          <p className="hero-subtitle">Discover our premium collection of car seats, all-weather mats, and custom covers that offer unparalleled protection and style for your vehicle.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/catalogue')}>Explore Products</button>
            <button className="btn btn-secondary" onClick={() => navigate('/why-ayas')}>Learn More</button>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="page-section">
        <h2 className="section-title">Our Commitment to Quality</h2>
        <p className="section-intro">We blend innovative design with the highest quality materials to ensure every journey is a pleasure.</p>
        <YouTubeAutoplay videoId="4HFe4W6tajY" />
      </section>

      {/* Featured Products Section */}
      <section className="page-section bg-light">
        <h2 className="section-title">Featured Products</h2>
        <div className="featured-products-grid">
          {featuredProducts.map((src, index) => (
            <div key={index} className="product-card-mini" onClick={() => navigate('/catalogue')}>
              <img src={src} alt={`Featured product ${index + 1}`} className="product-card-mini-img" />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn btn-primary" onClick={() => navigate('/catalogue')}>View Full Catalogue</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="page-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-quote">"{t.quote}"</p>
              <p className="testimonial-name">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;