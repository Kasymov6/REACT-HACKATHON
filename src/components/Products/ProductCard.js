import React, { useContext } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import shoppingCart from "../../assets/image/shopping.svg";
import { productContext } from "../../context/ProductContext";

const ProductCard = (props, { item }) => {
    const { addProductToCart } = useContext(productContext);
    return (
        <div className="cart-wrap">
            <div className="cart">
                <img src={props.item.img} />
                <div className="alert">
                    <h3 className="cardTitle">{props.item.title}</h3>
                    <p className="cardPrice">{props.item.price}$</p>
                    <div className="price-shop">
                        <Link to={`/details/${props.item.id}`}>
                            <button className="infoMore">Подробнее</button>
                        </Link>

                        <button
                            onClick={() => addProductToCart(props.item)}
                            className="shop-btn"
                        >
                            <img className="shoppingCart" src={shoppingCart} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
