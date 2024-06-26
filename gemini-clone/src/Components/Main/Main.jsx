import React, { useContext } from "react";
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
import { Context } from "../Context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <FontAwesomeIcon className="fa-xl" icon={faUserCircle} />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
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
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <FontAwesomeIcon icon={faUserCircle} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <FontAwesomeIcon icon={faMessage} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <FontAwesomeIcon className="search-box-icon" icon={faImage} />
              <FontAwesomeIcon
                className="search-box-icon fa-lg"
                icon={faMicrophone}
              />
              {input ? (
                <FontAwesomeIcon
                  onClick={() => onSent()}
                  className="search-box-icon fa-lg"
                  icon={faPaperPlane}
                />
              ) : null}
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
