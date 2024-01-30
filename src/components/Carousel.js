import "./CarouselStyle.css";
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Carousel2 from "./Carousel2";
import { productData, responsive } from "./Data";
const Carousele = () => {
    

     const product= productData.map((item)=>
     
          <Carousel2 name={item.name} image={item.image} price={item.price} description={item.description} />
    
     
      )
  return (
    
    <div className="Carouse">
   
        
      <Carousel responsive={responsive}>{product}</Carousel>
      
      
    </div>
  )
}

export default Carousele
