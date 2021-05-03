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
              <p className="header-p">
                <Link to="/">
                  <p>Meню</p>
                </Link>
              </p>
              <Link to="/products">
                <p className="header-p">Часы</p>
              </Link>
              <p className="header-p">
                <p>Мир ROLEX</p>
              </p>

              <p className="header-p">Поиск дестрибьютера</p>
              <div className="mid">
                <img src={rolexLogo} alt="rolex-logo" />
                <h2>ROLEX</h2>
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
                <p className="header-p">
                  <p>Ваша подборка</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
