import React, { useContext, useState } from "react";
import "./OrderBuyForm.css";
import { Link } from "react-router-dom";
import { calcTotalPrice } from "../helpers/calcPrice";
import { productContext } from "../../context/ProductContext";
const OrderBuyForm = () => {
  const { cart } = useContext(productContext);
  return (
    <div className="forms-css">
      <input name="name" className="form-inp" placeholder="Имя" type="text" />
      <input
        name="lastName"
        className="form-inp"
        placeholder="Фамилия"
        type="text"
      />
      <input
        name="email"
        className="form-inp"
        placeholder="E-Mail"
        type="text"
      />
      <input
        name="number"
        className="form-inp"
        placeholder="Номер"
        type="number"
      />
      <p>Total: {calcTotalPrice(cart.products)}</p>
      <Link to="/buy">
        <button className="form-btn">Заказать</button>
      </Link>
    </div>
  );
};

export default OrderBuyForm;
