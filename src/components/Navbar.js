import "./NavbarStyle.css"
import { IoCartOutline } from "react-icons/io5";
import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/logo.png';
import { useSelector } from "react-redux";

import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
   const[click,setClick] = useState(false);
  const handleClick =()=>setClick(!click);
  const[color,setColor]=useState(false);
  const navigate = useNavigate()
  const changeColor = () =>{
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false)
    }
    
  }
   window.addEventListener("scroll",changeColor)


   const carthandler = () =>{
    navigate('/addtocart')
   }
 // selector
   const cartItems =useSelector((store)=>store.cart.items)
  //  console.log(cartItems);
  return (
    <div className={color ? "header header-bg" : "header"}>
     
      <Link to="/">
      <img src={logo} alt="Logo" />
      </Link>
      
      <ul className={click ? "nav-menu active" : 
         "nav-menu" }>
       <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        className="search"
      />
    
     
    </div>
        <li>
            <Link to="/">Home</Link>
        </li>
       
        <li>
            <Link to="/shop">Shop</Link>
        </li>
        <li>
            <Link to="/pages">Pages</Link>
        </li>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
        
        <li>
            <Link to="/contact">Contact</Link>
        </li>
       
      </ul>
      <div className="cart" >
         <IoCartOutline onClick={carthandler}  />
         <span>{cartItems.length}</span>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {
          click ? (<FaTimes size={20} style={{color:"#000000"}}/> 
          ): (<FaBars size={20} style={{color:"#000000"}}/> )
        }
         
        

      </div>
    </div>
       )
  }  

export default Navbar
