import React, { useContext, useEffect } from "react";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { productContext } from "../../context/ProductContext";

const ProductCard = (props, { item }) => {
  const { addProductToCart,checkProductCart } = useContext(productContext);
  useEffect(()=>{
    checkProductCart()
  },[])
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
            
            <IconButton onClick={()=>addProductToCart(props.item)} color={checkProductCart(props.item.id)?"secondary":"primary"}>
            <ShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProductCard;
