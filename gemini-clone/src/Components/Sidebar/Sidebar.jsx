import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPlus,
  faMessage,
  faQuestion,
  faHistory,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <FontAwesomeIcon
          onClick={() => setExtended(prev => !prev)}
          className="menu fa-lg"
          icon={faBars}
        />
        <div className="new-chat">
          <FontAwesomeIcon className="fa-lg" icon={faPlus} />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <FontAwesomeIcon className="" icon={faMessage} />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <FontAwesomeIcon className="fa-lg" icon={faQuestion} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <FontAwesomeIcon className="fa-lg" icon={faHistory} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <FontAwesomeIcon className="fa-lg" icon={faGear} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
