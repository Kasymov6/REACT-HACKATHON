import React, { useContext } from "react";
import "./Header.css";
import rolexLogo from "../../assets/image/Rolex-logo.png";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthContext";

const Header = () => {
  const { isAuth } = useContext(authContext);

  return (
    <div className="popi">
      <div className="header">
        <div className="container">
          <div className="main-header">
            <div className="left-side">
                <Link to="/">
                  <p className="header-p">Meню</p>
                </Link>
                <Link to="">
                  <p className="header-p">Часы</p>
                </Link>
                <Link to="">
                  <p className="header-p">Мир ROLEX</p>
                </Link>                 
                <Link to="">                  
                  <p className="header-p">Поиск дестрибьютера</p>
                </Link>
              <div className="mid">
                <Link to="/">
                <img className="mid-img" src={rolexLogo} alt="rolex-logo" />
                <h2>ROLEX</h2>
                </Link>
              </div>
            </div>
            <div className="right-side">
              <div className="icon">
                <i className="fas fa-search"></i>
                <p className="header-p">
                  <input placeholder="Поиск"></input>
                </p>
              </div>
              {/* {isAuth ? (
                button{выйти}
              ) : (
                button{войти}
              )} */}
              <div className="icon">
                <i className="far fa-heart"></i>
                <Link to="/cart">
                  <p className="header-p">Ваша подборка</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
