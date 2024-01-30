import React from "react";
import "./index.css";
import Home from "./routes/Home"
import Shop from "./routes/Shop"
import Pages from "./routes/Pages"
import Blog from "./routes/Blog"
import Contact from "./routes/Contact"
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/pages" element={<Pages/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
      
    </Routes>
    </>
  )
}

export default App
