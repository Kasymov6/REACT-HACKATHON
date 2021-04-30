import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ProductList from "../Products/ProductList";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
