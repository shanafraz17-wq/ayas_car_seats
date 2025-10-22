import React, { useState, useMemo } from 'react';

const showcaseImages = import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

function Catalogue() {
  const categories = ['All', 'Car Seats', 'Car Mats', 'Seat Covers'];
  const [filter, setFilter] = useState('All');

  const categorizedImages = useMemo(() => Object.entries(showcaseImages).map(([path, src]) => {
    const name = path.split('/').pop().split('.')[0];
    let category = 'Uncategorized';
    if (name.includes('carseat') || name.includes('car-seat')) category = 'Car Seats';
    else if (name.includes('mat')) category = 'Car Mats';
    else if (name.includes('cover')) category = 'Seat Covers';
    return { src, category, name };
  }), []);

  const filteredImages = useMemo(() => {
    if (filter === 'All') return categorizedImages;
    return categorizedImages.filter((img) => img.category === filter);
  }, [filter, categorizedImages]);

  return (
    <section className="page-section">
      <h1 className="section-title">Our Catalogue</h1>
      <p className="section-intro">
        Browse our collection of high-quality automotive accessories.
      </p>

      <div className="our-products-header"> 
        <h2>We Deal All Types Of Car Seats,Car Mats and Seat Covers.</h2>
          <button onClick={() => setFilter('All')} className={`btn btn-filter ${filter === 'All' ? 'active' : ''}`}>
            Our Products
          </button>
      </div>

      <div className="catalogue-grid">
        {filteredImages.length > 0 ? (
          filteredImages.map((img, i) => (
            <div key={i} className="product-card">
              <img src={img.src} alt={img.name} className="product-card-img" />
              <div className="product-card-body">
                <h3 className="product-card-title"> Car Seats</h3>
               
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </section>
  );
}

export default Catalogue;