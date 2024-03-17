import React from "react";
import "./Cart.css";
// import { NavLink } from "react-router-dom";
const CartWork = (props) => {
  return (
    <div className="project-card">
      <div className="product">
        <img src={props.imgsrc} alt="" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-derails">
          <p>{props.price}</p>
          <div className="pro-btns">
            {/* <NavLink to={props.view} className="btn1">
              Add to Cart
            </NavLink> */}
            <button to={props.view} className="btn1">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWork;
