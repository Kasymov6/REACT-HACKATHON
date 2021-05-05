import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import rolexLogo from "../../assets/image/Rolex-logo.png";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
import { productContext } from "../../context/ProductContext";
import Profile from "./prifile.js"
import Navbar from "./Navbar"

const Header = () => {
  const { isAuth } = useContext(authContext);
  const [productSearch, setProductSearch] = useState("");
  const { search } = useContext(productContext);

  function handleSeacrh(e) {
    setProductSearch(e.target.value);
  }

  useEffect(() => {
    search(productSearch);
  }, [productSearch]);

  return (
    <div className="popi">
      <div className="header">
        <div className="container">
          <div className="main-header">
            <div className="left-side">
              <Link to="/">
                <p className="header-p">Meню</p>
              </Link>
              <Link to="/products">
                <p className="header-p">Часы</p>
              </Link>
              <Link to="">
                <p className="header-p">Мир ROLEX</p>
              </Link>
              </div>
              <div className="mid">
                <Link to="/">
                  <img className="mid-img" src={rolexLogo} alt="rolex-logo" />
                  <h2 className="rolex">ROLEX</h2>
                </Link>
              </div>
            
            <div className="right-side">
              <div className="icon">
                <i className="fas fa-search"></i>
                <p className="header-p2">
                  <input className="search-inp" onChange={handleSeacrh} placeholder="Поиск"></input>
                </p>
              </div>
              <div className="icon">
                <i className="far fa-heart"></i>
                <Link to="/cart">
                  <p className="header-p2">Ваша подборка</p>
                </Link>
                <div className="navbar"><Navbar/></div>
                
                <Profile/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
