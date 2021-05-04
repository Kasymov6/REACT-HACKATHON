import React, { useContext } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
// import shoppingCart from "../../assets/image/shopping.svg";
import { productContext } from "../../context/ProductContext";

const ProductCard = (props, { item }) => {
  const { addProductToCart } = useContext(productContext);
  return (
    <div className="cart">
      <img src={props.item.img} />
      <div className="alert">
        <h3>{props.item.title}</h3>
        <div className="price-shop">
          <p>{props.item.price}$</p>
          <Link to={`/details/${props.item.id}`}>
            <button>Подробнее</button>
          </Link>

          <button
            onClick={() => addProductToCart(props.item)}
            className="shop-btn"
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
