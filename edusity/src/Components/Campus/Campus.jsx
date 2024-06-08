import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.avif";
import gallery_2 from "../../assets/gallery-2.jpg";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here
        <FontAwesomeIcon
          icon={faArrowRight}
          className="campus-icon icon-in-button"
        />
      </button>
    </div>
  );
};

export default Campus;
