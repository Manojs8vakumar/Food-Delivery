import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { topBrands } from '../data/mockData';

export default function TopBrands({ onSelectBrand, selectedBrand }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="top-brands-section">
      <div className="section-header-row">
        <div>
          <h2 className="section-heading">Top brands for you</h2>
          <p className="section-subheading">Order from your favorite restaurant chains</p>
        </div>
        <div className="scroll-controls">
          <button 
            className="scroll-btn prev" 
            onClick={() => scroll('left')}
            aria-label="Scroll brands left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="scroll-btn next" 
            onClick={() => scroll('right')}
            aria-label="Scroll brands right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="brands-carousel" ref={scrollContainerRef}>
        {topBrands.map((brand) => {
          const isSelected = selectedBrand === brand.name;
          return (
            <div
              key={brand.id}
              className={`brand-card-item ${isSelected ? 'active-brand' : ''}`}
              onClick={() => onSelectBrand(brand.name)}
            >
              <div className="brand-avatar-box">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="brand-logo-img" 
                  loading="lazy" 
                />
              </div>
              <span className="brand-name-text">{brand.name}</span>
              <span className="brand-time-text">{brand.time}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
