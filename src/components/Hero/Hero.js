import React from "react";
import Button from "../Button/Button";
import video from "../../assets/videos/video-2.mp4";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero__container">
      {/* <video src={video} autoPlay loop muted /> */}
      <h1>Adventure waits</h1>
      <p>What are you waiting for?</p>
      <div className="hero__buttons">
        <Button
          className="buttons"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get started
        </Button>
        <Button
          className="buttons"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          watch trailer <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
