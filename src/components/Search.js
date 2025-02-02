import React from 'react'
import "./NavbarStyle.css";
const Search = ({search, handleSearch,animate}) => {
  
  return (
    <>
    <div className={`Search-input ${animate ? 'slide-in' : ''}`}>
    <input className='search-write' placeholder='Search here.....' type='search'></input>


      <div className='cross' onClick={handleSearch} >+</div>
      
    </div>
    </>
  )
}

export default Search
