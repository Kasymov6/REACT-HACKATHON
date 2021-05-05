import React from "react";
import Sidebar from "../HomePage/SideBar";
import ProductsList from "./ProductList";

const Main = (props) => {
  return (
    <div>
      <Sidebar {...props} />
      <ProductsList />
    </div>
  );
};

export default Main;
