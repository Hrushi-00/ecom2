import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartWork from "./CartWork";
import "./Cart.css";
import { clearCart } from '../utils/cartSlice';

const Addcart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch=useDispatch()

const handleClearCart=()=>{
      dispatch(clearCart())}

      
  return (
 
    <div>
    <button className="btn1" onClick={handleClearCart}>Clear Cart</button>
    {cartItems.length === 0 && <h1>Cart is Empty. Add items to the Cart</h1>}
    {cartItems.map((item, index) => (
      <div key={index} className="adddata">
        <CartWork items={item} />
      </div>
    ))}
  </div>


  );
};

export default Addcart;
