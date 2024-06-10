import React, { useContext, useState } from "react";
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
import { Context } from "../Context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <FontAwesomeIcon
          onClick={() => setExtended((prev) => !prev)}
          className="menu fa-lg"
          icon={faBars}
        />
        <div className="new-chat">
          <FontAwesomeIcon
            onClick={() => newChat()}
            className="fa-lg"
            icon={faPlus}
          />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <FontAwesomeIcon className="" icon={faMessage} />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
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
