import React from "react";
import "./Header.css";
import rolexLogo from "../../assets/image/Rolex-logo.png";
import videoMP4 from "../../assets/video/new-datejust-cover-video.webm";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="main-header">
            <div className="left-side">
              <h5>
                <a href="#">Меню</a>
              </h5>
              <h5>
                <a href="#">Часы</a>
              </h5>
              <h5>
                <a href="#">Мир Rolex</a>
              </h5>
              <h5>
                <a href="#">Поиск дистрибьютора</a>
              </h5>
              <div className="mid">
                <img src={rolexLogo} alt="rolex-logo" />
                <h2>ROLEX</h2>
              </div>
            </div>
            <div className="right-side">
              <div className="icon">
                <i className="fas fa-search"></i>
                <h5>
                  <a href="#">Поиск</a>
                </h5>
              </div>
              <div className="icon">
                <i className="far fa-heart"></i>
                <h5>
                  <a href="#">Ваша подборка</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-video">
        <video loop muted autoPlay className="fullscreen-bg__video">
          <source src={videoMP4} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Header;
