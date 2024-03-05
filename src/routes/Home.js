import React from 'react'
import Navbar from '../components/Navbar'

import Carousel from '../components/Carousel'
import Cart from '../components/Cart'
import ClothingCollections from '../components/ClothingCollections'


const Home = () => {
  return (
    <div> 
      <Navbar />
      <Carousel />
    <ClothingCollections />
    <Cart />
   
    </div>
  )
}

export default Home
