import React from "react";
import "./Preloader.css";
import logo from "../assets/logo.jpg"; 

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={logo} alt="Loading..." className="preloader-image" />
    </div>
  );
};

export default Preloader;
