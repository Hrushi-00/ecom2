import React, { useState, useEffect } from "react";
import "./Seal.css";
import productSaleImage from "../assets/product-sale.png";
const Seal = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 13,
    minutes: 6,
    seconds: 3,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, seconds: 59, minutes: minutes - 1 };
        } else if (hours > 0) {
          return { ...prevTime, seconds: 59, minutes: 59, hours: hours - 1 };
        } else if (days > 0) {
          return { ...prevTime, seconds: 59, minutes: 59, hours: 23, days: days - 1 };
        } else {
          clearInterval(timer); // Stop the timer when countdown ends
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
   <>
    <div className="main-head">
      {/* Header Section */}
      <div className="head">
        <h2>
          Clothings Hot<br/>
          <span className="info-name">Shoe Collection</span>
          Accessories
        </h2>
      </div>

      {/* Content Section */}
      <div className="contents-info">
        {/* Product Info Section */}
        <div className="product-info">
        <img src={productSaleImage} alt="Multi-pocket Bag" className="product-image" />
          <span className="sale-price">Sale Of $29.99</span>
        </div>

        {/* Deal Info Section */}
        <div className="deal-info">
          <p className="deal-title">DEAL OF THE WEEK</p>
          <h3 className="product-title">Multi-pocket Chest<br/> Bag Black</h3>
          <div className="timer">
            <span>
              {timeLeft.days} <small>Days</small>
            </span>{" "}:{" "}
            <span>
              {timeLeft.hours} <small>Hours</small>
            </span>{" "}
            :{" "}
            <span>
              {timeLeft.minutes} <small>Minutes</small>
            </span>{" "}
            :{" "}
            <span>
              {timeLeft.seconds} <small>Seconds</small>
            </span>
          </div>
          <button className="shop-now">SHOP NOW</button>
        </div>
      </div>
    </div>
   </>
  );
};

export default Seal;
