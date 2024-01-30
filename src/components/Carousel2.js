import React from 'react'
const Carousel2 = (props) => {
  return (
   
       <div className='card'>


    
     <div className='components'>
     <p>Summer Collection</p>
     <h1>{props.name}</h1>

    <p className='price'>{props.price}</p>
    <p>{props.description}</p>
    <button>Shop now </button>
     </div>
     <div className='className="product--image"'>
<img 
     src={props.image}  alt='product image'/>
</div>
  </div>
   
  )
}

export default Carousel2



