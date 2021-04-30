import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
// import TopicCard from "../TopicCard/TopicCard";
const ProductList = () => {
  const { getProducts, productsData } = useContext(productContext);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="list">
      {productsData.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
