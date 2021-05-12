import React from "react";

const Hero = ({ header, text, image }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero__text">
        <h1 className="hero-text__header">{header}</h1>
        <p className="hero-text__text">{text}</p>
      </div>
    </div>
  );
};

export default Hero;
