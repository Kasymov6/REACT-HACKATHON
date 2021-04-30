import React from "react";
import "./Header.css";
import rolexLogo from "../../assets/image/Rolex-logo.png";

const componentName = () => {
    return (
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
        </div>
    );
};

export default componentName;
