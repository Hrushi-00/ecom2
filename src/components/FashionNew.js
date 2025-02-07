import React from "react";
import "./FashionNew.css";
import img1 from "../assets/blog/blog-1.jpg";
import img2 from "../assets/blog/blog-2.jpg";
import img3 from "../assets/blog/blog-3.jpg";
import img4 from "../assets/icon/calendar.png"
const fetchApi = [
  {
    id: 1,
    ImageData: img1,
    calendar:img4,
    date: "28 February 2020",
    title: "What Curling Irons Are The Best Ones",
  },
  {
    id: 2,
    ImageData: img2,
    calendar:img4,
    date: "28 February 2020",
    title: "Eternity Bands Do Last Forever",
  },
  {
    id: 3,
    ImageData: img3,
    calendar:img4,
    date: "28 February 2020",
    title: "The Health Benefits Of Sunglasses",
  },
];

function FashionNew() {
  return (
    <>
      <div className="fashionNew-head">
        <div className="fashion-name">
          <span>Latest News</span>
          <h2>Fashion New Trends</h2>
        </div>
        <div className="project-container">
          {fetchApi.map((val) => (
            <div key={val.id} className="fashion-item">
              <img src={val.ImageData} alt={val.title} />
              <div className="project-info">
              <span> <img src={val.calendar} alt="calendar" />{val.date}</span>
              <h3>{val.title}</h3>
              <a href="#">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FashionNew;
