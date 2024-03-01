import React from 'react'
import "./Clothing.css";
import banner1 from '../assets/banner/banner-1.jpg';
import banner2 from '../assets/banner/banner-2.jpg';
import banner3 from '../assets/banner/banner-3.jpg';
const ClothingCollections = () => {
  return (
    <div className='main-container'>
        <div className='img-first'> 
        <img src={banner2} alt="Logo" />
     
        <h1>Accessories</h1>
        <a href='#'>Shop Now</a>
        </div>
            <div className='container' >
            <div className='img-Second'>
            <img src={banner1} alt="Logo" />
            <h1>Clothing Collections 2030</h1>
            <a href='#'>Shop Now</a>
            </div>
            <div className='img-third'>
            <img src={banner3} alt="Logo" />
            <h1>Shoes Spring 2030</h1>
            <a href='#'>Shop Now</a>
            </div>
        </div>
        
    </div>
  )
}

export default ClothingCollections
