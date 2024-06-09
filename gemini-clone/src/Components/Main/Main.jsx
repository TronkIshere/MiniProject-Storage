import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCompass,
  faImage,
  faLightbulb,
  faMessage,
  faMicrophone,
  faPaperPlane,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <FontAwesomeIcon className="fa-xl" icon={faUserCircle} />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beatiful places to see on an upcoming road trip</p>
            <FontAwesomeIcon className="card-icon" icon={faCompass} />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: burban planning</p>
            <FontAwesomeIcon className="card-icon" icon={faLightbulb} />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <FontAwesomeIcon className="card-icon" icon={faMessage} />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <FontAwesomeIcon className="card-icon" icon={faCode} />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <FontAwesomeIcon className="search-box-icon" icon={faImage} />
              <FontAwesomeIcon
                className="search-box-icon"
                icon={faMicrophone}
              />
              <FontAwesomeIcon
                className="search-box-icon"
                icon={faPaperPlane}
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
