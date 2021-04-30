import React, { useContext, useEffect } from "react";
import { productContext } from "../../../context/ProductContext";
import ProductCard from "../../Products/ProductCard";
import "../../Products/ProductList.css";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
const AdminProductList = () => {
  const { getProducts, productsData } = useContext(productContext);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="wrap">
      <div className="list">
        {productsData.map((item) => (
          <AdminProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AdminProductList;
