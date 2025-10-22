import React from 'react';

const features = [
  {
    icon: '🛡️',
    title: 'Uncompromising Safety',
    description: 'Our car seats are engineered and rigorously tested to meet the highest safety standards. We use impact-absorbing materials and reinforced frames to ensure your peace of mind on every trip.',
  },
  {
    icon: '☁️',
    title: 'Superior Comfort',
    description: 'Long drives are a breeze with our ergonomically designed seats and plush fabrics. We prioritize comfort without sacrificing durability, using breathable materials that provide support where you need it most.',
  },
  {
    icon: '💪',
    title: 'Built to Last',
    description: 'From our all-weather floor mats to our tear-resistant seat covers, every Ayas product is crafted for longevity. We source premium materials that stand up to daily wear and tear, protecting your investment.',
  },
];

function WhyAyas() {
  return (
    <div className="page-section">
      <h1 className="section-title">Why Choose Ayas?</h1>
      <p className="section-intro">
        We are more than just a brand. We are a promise of quality, safety, and comfort for your family.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyAyas;