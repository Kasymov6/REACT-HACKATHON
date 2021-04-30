import React from "react";
import Main from "../Main/Main";
import ProductList from "../Products/ProductList";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <Main />
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
