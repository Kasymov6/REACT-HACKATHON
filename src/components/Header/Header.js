import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import rolexLogo from "../../assets/image/Rolex-logo.png";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
import { productContext } from "../../context/ProductContext";

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
                            <p className="header-p">
                                <Link to="/">
                                    <p>Meню</p>
                                </Link>
                            </p>
                            <p className="header-p">
                                <Link to="/filter">
                                    <p>Часы</p>
                                </Link>
                            </p>
                            <p className="header-p">
                                <p>Мир ROLEX</p>
                            </p>
                            <p className="header-p">
                                <p>Поиск дестрибьютера</p>
                            </p>
                            <div className="mid">
                                <img src={rolexLogo} alt="rolex-logo" />
                                <h2 className="rolex">ROLEX</h2>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="icon">
                                <i className="fas fa-search"></i>
                                <p className="header-p">
                                    <input
                                        onChange={handleSeacrh}
                                        placeholder="Поиск"
                                    ></input>
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
