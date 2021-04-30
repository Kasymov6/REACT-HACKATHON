import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import "./ProductList.css";
const ProductList = () => {
  const { getProducts, productsData } = useContext(productContext);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="wrap">
      <div className="list">
        {productsData.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
