import React from 'react';
import { useSelector } from 'react-redux';
import CartWork from "./CartWork";

const Addcart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      {cartItems.map((item, index) => (
        <CartWork key={index} items={item} />
      ))}
    </div>
  );
};

export default Addcart;
