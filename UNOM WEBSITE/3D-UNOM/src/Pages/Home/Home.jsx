// src/pages/Home.jsx
      {/* <div className="home-container"> */}
        {/* <div className="center">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      {/* </div> */}


// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import HomePage from './HomePage.mp4';
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/start");
  };

  return (
    <div className="bg">
      <div className="overlay"></div>
      <video src={HomePage} autoPlay loop muted />
      <div className="content">
        <h1 className="title">UNOM MEDIA PAGE</h1>
        <button className="center-button" onClick={handleClick}>
          Start to Explore
        </button>
      </div>
    </div>
  );
};

export default Home;

