import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets.js";
import { Context } from "../../context/AppContext.jsx";

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const [hovered, setHovered] = useState(false);

  const {onSent, previousprompts, setRecentprompts,newchat} = useContext(Context);

  const loadPrompt = async(prompt) =>{
    setRecentprompts(prompt)
    await onSent(prompt)
  }

  const isExpanded = extended || hovered;

  return (
    <div
      className={`sidebar ${isExpanded ? "extended" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=>newchat()} className="new-chat">
          <img src={assets.plus_icon} alt="plus_icon" />
          {isExpanded ? <p>New chat...</p> : null}
        </div>
        {isExpanded ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousprompts.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {isExpanded ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {isExpanded ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {isExpanded ? <p>settings </p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
