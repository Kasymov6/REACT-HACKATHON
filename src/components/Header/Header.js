import React from "react";
<<<<<<< HEAD
import "./Header.css";
import rolexLogo from "../../assets/image/Rolex-logo.png";
import videoMP4 from "../../assets/video/new-datejust-cover-video.webm";
=======
import "./Header.css"
import rolexLogo from "../../assets/image/Rolex-logo.png"
import shoppingCart from "../../assets/image/shopping.svg"
>>>>>>> 098889a2e4e56d1d098510ad7d58bc7b6b20c2e0

const Header = () => {
  return (
<<<<<<< HEAD
    <div className="popi">
      <div className="header">
        <div className="container">
          <div className="main-header">
            <div className="left-side">
              <p className="header-p">
                <a href="#">Меню</a>
              </p>
              <p className="header-p">
                <a href="#">Часы</a>
              </p>
              <p className="header-p">
                <a href="#">Мир Rolex</a>
              </p>
              <p className="header-p">
                <a href="#">Поиск дистрибьютора</a>
              </p>
              <div className="mid">
                <img src={rolexLogo} alt="rolex-logo" />
                <h2>ROLEX</h2>
              </div>
            </div>
            <div className="right-side">
              <div className="icon">
                <i className="fas fa-search"></i>
                <p className="header-p">
                  <a href="#">Поиск</a>
                </p>
              </div>
              <div className="icon">
                <i className="far fa-heart"></i>
                <p className="header-p">
                  <a href="#">Ваша подборка</a>
                </p>
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
=======
    
  <div className="popi">
    <div className="header">
                <div className="container">
                  <div className="main-header">
                      <div className="left-side">
                          <p className="header-p"><a href="#">Меню</a></p>
                          <p className="header-p"><a href="#">Часы</a></p>
                          <p className="header-p"><a href="#">Мир Rolex</a></p>
                          <p className="header-p"><a href="#">Поиск дистрибьютора</a></p>
                      <div className="mid">
                        <img src={rolexLogo} alt="rolex-logo"/>
                        <h2>ROLEX</h2>
                      </div>
                      </div>
                      <div className="right-side">
                          <div className="icon">
                              <i className="fas fa-search"></i>
                              <p className="header-p"><a href="#">Поиск</a></p>
                          </div>
                          <div className="icon">
                              <i className="far fa-heart"></i>
                              <p className="header-p"><a href="#">Ваша подборка</a></p>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
            {/* ---------------------START-CARD--------------------- */}
            {/* <div className="cart">
              <img src="https://content.rolex.com/dam/new-watches-2021/homepage/roller/all-watches/watches_0003_m126200-0020-datejust.jpg?imwidth=550"/>
              <div className="alert">
                <h3>DATEJUST</h3>
                <p>Эталон классических часов</p>
                <div class="price-shop">
                <p>1300$</p>
                <button className="shop-btn">
                  <img className="shoppingCart" src={shoppingCart}/>
                </button>
                </div>
              </div>
            </div> */}
            {/* ----------------------END-CARD-------------------- */} 
  </div>
  )
>>>>>>> 098889a2e4e56d1d098510ad7d58bc7b6b20c2e0
};

export default Header;
