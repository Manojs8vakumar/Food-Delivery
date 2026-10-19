import React from 'react';
import { Bike, UtensilsCrossed, Wine } from 'lucide-react';

export default function CategoryTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: 'delivery',
      label: 'Delivery',
      subtitle: 'Order food online',
      icon: Bike,
      iconBg: '#ffebee',
      iconColor: '#e23744'
    },
    {
      id: 'dining',
      label: 'Dining Out',
      subtitle: 'Explore dining venues',
      icon: UtensilsCrossed,
      iconBg: '#e8f5e9',
      iconColor: '#2e7d32'
    },
    {
      id: 'nightlife',
      label: 'Nightlife',
      subtitle: 'Pubs, bars & clubs',
      icon: Wine,
      iconBg: '#f3e5f5',
      iconColor: '#7b1fa2'
    }
  ];

  return (
    <div className="category-tabs-container">
      <div className="content-wrapper">
        <div className="tabs-flex">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`tab-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div 
                  className={`tab-icon-circle ${isActive ? 'active-circle' : ''}`}
                >
                  <Icon size={24} className="tab-lucide-icon" />
                </div>
                <div className="tab-labels">
                  <span className="tab-title">{tab.label}</span>
                </div>
                {isActive && <div className="active-tab-indicator"></div>}
              </button>
            );
          })}
        </div>
      </div>
      <div className="tabs-bottom-border"></div>
    </div>
  );
}
