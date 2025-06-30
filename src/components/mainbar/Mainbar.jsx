import React from "react";
import "./mainbar.css";
import { assets } from "../../assets/assets.js";
import { useContext } from "react";
import { Context } from "../../context/AppContext.jsx";
import ReactMarkdown from "react-markdown";

function Mainbar() {
  const {
    onSent,
    recentprompts,
    output,
    loading,
    resultdata,
    setinput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!output ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Naveen.</span>
              </p>
              <p>How can i help u today ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>suggest some places to me for a family trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>say some cool books to read while i am free</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Recommend quick and healthy dinner ideas</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Help me write a birthday message for my friend</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentprompts}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <>
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                </>
              ) : (
                <div className="markdown-output">
                  <ReactMarkdown>{resultdata}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setinput(e.target.value)}
              value={input}
              type="text"
              name=""
              id=""
              placeholder="Ask Gemini"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
