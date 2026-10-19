import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { foodCategories } from '../data/mockData';

export default function FoodInspiration({ selectedFoodCategory, onSelectCategory }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="inspiration-section">
      <div className="section-header-row">
        <div>
          <h2 className="section-heading">Inspiration for your first order</h2>
          <p className="section-subheading">Hand-picked delicious choices based on popular demand</p>
        </div>
        <div className="scroll-controls">
          <button 
            className="scroll-btn prev" 
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="scroll-btn next" 
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="inspiration-carousel" ref={scrollContainerRef}>
        {foodCategories.map((item) => {
          const isSelected = selectedFoodCategory === item.tag;
          return (
            <div
              key={item.id}
              className={`inspiration-item ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectCategory(item.tag)}
            >
              <div className="inspiration-img-ring">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy" 
                  className="inspiration-img" 
                />
              </div>
              <span className="inspiration-title">{item.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
