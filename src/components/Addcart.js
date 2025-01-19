import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import "./Cart.css";
import { clearCart } from "../utils/cartSlice";
import ProductSummaryPage from "./CartList";

const Addcart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    // Synchronize cart items to local storage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <button className="btn2" onClick={handleClearCart}>
          Clear Cart
        </button>
        {cartItems?.length === 0 ? (
          <h1>Cart is Empty. Add items to the Cart</h1>
        ) : (
          <ProductSummaryPage items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Addcart;
