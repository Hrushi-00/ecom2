import "./CarouselStyle.css";
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Carousel2 from "./Carousel2";
import { productData, responsive } from "./Data";
const Carousele = () => {
    

     const product= productData.map((item)=>
     
          <Carousel2 key={item.id} name={item.name} image={item.image}  description={item.description} />
    
     
      )
  return (
    
    <div className="Carouse">
   
        
      {/* <Carousel responsive={responsive}>{product}</Carousel> */}
      
      <Carousel
        responsive={responsive}
        autoPlay={true}               // Enables auto play
        autoPlaySpeed={4000}          // Sets speed for each slide in milliseconds
        infinite={true}               // Ensures the carousel is infinite (loops back)
        arrows={false}                // Hides the arrows for manual navigation
        // centerMode={true}             // Enables the center mode to highlight the active slide
        // swipeable={true}              // Allows swiping on touch devices
        // draggable={true}              // Allows dragging the carousel on desktop
      >
        {product}
      </Carousel>
    </div>
  )
}

export default Carousele
