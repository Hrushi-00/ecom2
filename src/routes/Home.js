import React from 'react'
import Navbar from '../components/Navbar'

import Carousel from '../components/Carousel'

import ClothingCollections from '../components/ClothingCollections'
import Carts from '../components/Carts'
import Seal from '../components/Seal'



const Home = () => {
  return (
    <div> 
      <Navbar />
      <Carousel />
    <ClothingCollections />
    <Carts />
    <Seal />

   
    </div>
  )
}

export default Home
