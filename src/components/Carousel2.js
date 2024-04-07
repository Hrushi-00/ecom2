import React from 'react';

const Carousel2 = (props) => {
  return (
    <div className='cards'>
      <div className='components'>
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
