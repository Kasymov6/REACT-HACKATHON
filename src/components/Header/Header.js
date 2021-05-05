import React, { useContext, useState } from "react";
import "./Header.css";
import rolexLogo from "../../assets/image/Rolex-logo.png";
import { Link, useHistory } from "react-router-dom";
import { productContext } from "../../context/ProductContext";
import Profile from "./prifile.js"
import Navbar from "./Navbar"

const Header = () => {
  const history = useHistory();
  const { getProducts } = useContext(productContext);
  const [searchValue, setSearchValue] = useState(getSearchValue());
  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search);
    search.set("q", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setSearchValue(e.target.value);
    getProducts(history);
  };
  function getSearchValue() {
    const search = new URLSearchParams(history.location.search);
    return search.get("q");
  }

  return (
    <div className="popi">
      <div className="header">
        <div className="container">
          <div className="main-header">
            <div>
            <div class="hamburger-menu">
              <input type="checkbox" id="menu__toggle"/>
              <label for="menu__toggle" class="menu__btn">
              <span></span>
              </label>
                  <ul className="navbar__menu menu__box">
                    <Link to="/" className="navbar__item">
                      <li className="header-p">Meню</li>
                    </Link>
                    <Link to="/products" className="navbar__item">
                      <li className="header-p">Часы</li>
                    </Link>
                    <Link to="" className="navbar__item">
                      <li className="header-p">Мир ROLEX</li>
                    </Link>
                    </ul>
              </div>
              <div className="mid">
                <Link to="/">
                  <img className="mid-img" src={rolexLogo} alt="rolex-logo" />
                  <h2 className="rolex">ROLEX</h2>
                </Link>
              </div>
              </div>
            
            <div className="right-side">
              <div className="icon">
                <i className="fas fa-search"></i>
                <p className="header-p2">
                  <input className="search-inp"  placeholder="Поиск"></input>
                </p>
              </div>
              <div className="icon">
                <i className="far fa-heart"></i>
                <Link to="/cart">
                  <p className="header-p2">Ваша подборка</p>
                </Link>
                
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
