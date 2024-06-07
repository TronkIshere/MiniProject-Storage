import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a btter world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, kills, and experiences needed to excel in the dynamic field
          of education
        </p>
        <button className="btn">
            Explore more
            <FontAwesomeIcon icon={faArrowRight} className="icon-in-button"/>
        </button>
      </div>
    </div>
  );
};

export default Hero;
