import React, { useState } from 'react';
import '../multipalcarts/AccordionComponent.css'; // Import CSS file with styles

const Multipalcarts = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="containers">
      <div className={`card ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleAccordionClick(0)}>
        <img className="background" src={require('../multipalcarts/asset/02.jpg').default} alt="" />
        <div className="card-content">
          <div className="profile-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2">
              {/* SVG paths */}
            </svg>
          </div>
          <h3 className="title">GTA 6</h3>
        </div>
        <div className="backdrop"></div>
      </div>
      {/* Repeat the card structure for other items */}
    </div>
  );
};

export default Multipalcarts;
