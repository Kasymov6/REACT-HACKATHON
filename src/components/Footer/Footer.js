import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
        <footer>
            <div className="footer_menu">
                <div className="container">
                    <div className="row">
                        <div className="footer-col" >
                            <h4>Часы Rolex </h4>
                            <ul>
                                <li><a href="#">Новинки 2021</a></li>
                                <li><a href="#">Мужские часы</a></li>
                                <li><a href="#">Женские часы</a></li>
                                <li><a href="#">Поиск часов</a></li>
                                <li><a href="#">Конфигуратор часов</a></li>
                                <li><a href="#">История марки и часовое мастерство</a></li>
                                <li><a href="#">За каждыми часами Rolex стоит история</a></li> 
                            </ul>

                       </div>
                       <div className="footer-col" >
                            <h4>Коллекция</h4>
                            <ul>
                                <li><a href="#">Air-King</a></li>
                                <li><a href="#">Day-Date</a></li>
                                <li><a href="#">Sea-Dweller</a></li>
                                <li><a href="#">Datejust</a></li>
                                <li><a href="#">Milgauss</a></li>
                                <li><a href="#">GMT-Master </a></li>
                                <li><a href="#">Submariner</a></li>
                            </ul>

                       </div>
                       <div className="footer-col" >
                            <h4>Услуги</h4>
                            <ul>
                                <li><a href="#">Покупка часов Rolex</a></li>
                                <li><a href="#">Найти дистрибьютора</a></li>
                                <li><a href="#">Ваша подборка</a></li>
                                <li><a href="#">Уход за часами</a></li>
                                <li><a href="#">Часто задаваемые вопросы</a></li>
                                
                            </ul>

                       </div>
                       <div className="footer-col" >
                            <h4>Официальные каналы</h4>
                            <div className="social-links">
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </div>

                       </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;