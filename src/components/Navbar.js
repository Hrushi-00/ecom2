import "./NavbarStyle.css";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { FaBars, FaTimes, FaUserAlt   } from "react-icons/fa";
import Search from "./Search";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const[search,setSearch]=useState(false);
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);

  // Handle click for mobile menu toggle
  const handleClick = () => setClick(!click);

  const handleSearch=()=>{
    setSearch(!search);
  }

  // Change navbar color on scroll
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // Navigate to cart page
  const carthandler = () => {
    navigate("/addtocart");
  };
  const userhandler = () => {
    navigate("/login");
  };

  // Update cart count from Redux and sync with localStorage
  useEffect(() => {
    const count = cartItems.length;
    setCartCount(count);
    localStorage.setItem("cartCount", count);
  }, [cartItems]);

  // Initialize cart count from localStorage on component mount
  useEffect(() => {
    const savedCount = parseInt(localStorage.getItem("cartCount"))
    setCartCount(savedCount);
  }, []);


  


  window.addEventListener("scroll", changeColor);

  return (
    
   <>
   {search?<Search   search={search} handleSearch={handleSearch}/>: <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <ul className={click ? "nav-menu active " : "nav-menu" }>
        {/* <div className="search-bar">
        <IoIosSearch  />
        </div> */}
         
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

        <div className="search-bar">
        <IoIosSearch onClick={handleSearch}/>
        </div>
      </ul>
          

          
      <div className="cart">
      <div className="user">
          <FaUserAlt size={25} style={{ color: "#000000"}} onClick={userhandler}  />
         </div>
        <IoCartOutline onClick={carthandler} />
        <span>{cartCount}</span>
        
        
      </div>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#000000" }} />
        ) : (
          <FaBars size={20} style={{ color: "#000000" }} />
         )}
         </div>
        
          
    </div>
    }
   </>
  );
};

export default Navbar;
