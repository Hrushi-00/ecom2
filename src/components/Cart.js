
import CartWork from './CartWork'
import CartData from './CartData'

import React from 'react'

const Cart = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading">Product</h1>
    <div className="project-container">
       {CartData.map((val,ind)=>{
           return(
           <CartWork     
           key={ind}
           imgsrc={val.imgsrc1}
           title={val.title}
        
           price={val.price}
            />
               )
       })}
    </div>
   </div>
  )
}

export default Cart