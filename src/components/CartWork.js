import React from "react";
import "./Cart.css";
  import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CartWork = (props) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(props.items)); 
  };

  return (
    <div className="project-card">
      <div className="product">
        <img src={props.items.imgsrc1} alt="" />
        
        <div className="pro-details">
        <h2 className="project-title">{props.items.title}</h2>
          <p>{props.items.price}</p>
          <div className="pro-btns">
            <button className="btn1" onClick={handleAddItem}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWork;
