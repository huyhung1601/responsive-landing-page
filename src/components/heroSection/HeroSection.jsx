import React from "react";
import Button from "../button/Button";
import './styles.scss'
const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className='far fa-clay-circle'/>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
