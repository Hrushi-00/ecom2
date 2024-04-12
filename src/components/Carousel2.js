import React, { useState, useEffect } from 'react';
import './CarouselStyle.css';

const Carousel2 = (props) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setAnimate(true);
  }, []);

  return (
    <div className='cards'>
      <div className={`components ${animate ? 'slide-in' : ''}`}>
        <p className='first'>Summer Collection</p>
        <h1>{props.name}</h1>
        <p className='discrip'>{props.description}</p>
        <button>Shop now</button>
      </div>
      <div className="product--image">
        <img src={props.image} alt='product image' />
      </div>
    </div>
  );
};

export default Carousel2;
