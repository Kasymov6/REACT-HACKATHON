import React, { useContext, useEffect } from 'react';
import "./Carts.css"
import productContext from "../../context/ProductContext"

const Carts = () => {
    const {cart, gerCard}=useContext(productContext)
    useEffect(()=>{
        gerCard()
    })
    return (
        <>
         {cart.products ? (
             <div>opoijpjihoih</div>
           {cart.products.map(elem=>(
            <div className="all-cards">
            <div className="main-card">
                <div className="img-card">
                    <img src={elem.item.img} alt="часики"/>
                </div>
                <div className="info-card">
                    <h3>{elem.item.title}</h3>
                    <p className="opisanie">{elem.item.price}$ Часы Oyster Perpetual Explorer и Oyster Perpetual Explorer II появились в результате тесного сотрудничества Rolex с миром исследований. Они порой находятся в условиях, в которых отваживается работать далеко не каждый.</p>
                </div>
                <div className="btns-card">
                    <button className="btns-shop">Buy</button>
                    <button className="btns-shop">Show Info</button>
                    <button className="btns-shop">Delete</button>
                </div>
            </div>
        </div>))}
        ):(
            <div>NO</div>)}
        </>
    );
};

export default Carts;   