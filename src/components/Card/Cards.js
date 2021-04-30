import React from 'react';
import "./Card.css"

const Card = () => {
    return (
        <div className="all-cards">
            <div className="main-card">
                <div className="img-card">
                    <img src="https://content.rolex.com/dam/new-watches-2021/homepage/roller/all-watches/watches_0004_m124273-0001-explorer.jpg?imwidth=550" alt="часики"/>
                </div>
                <div className="info-card">
                    <h3>EXPLORER</h3>
                    <p className="opisanie">Часы Oyster Perpetual Explorer и Oyster Perpetual Explorer II появились в результате тесного сотрудничества Rolex с миром исследований. Они порой находятся в условиях, в которых отваживается работать далеко не каждый.</p>
                </div>
                <div className="btns-card">
                    <button className="btns-shop">Buy</button>
                    <button className="btns-shop">Show Info</button>
                    <button className="btns-shop">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Card;