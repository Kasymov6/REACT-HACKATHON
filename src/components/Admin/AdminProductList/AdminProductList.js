import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { productContext } from "../../../context/ProductContext";
import "../../Products/ProductList.css";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
import "./AdminProductList.css";

const AdminProductList = () => {
  const { getProducts, productsData, allPages, setPage } = useContext(
    productContext
  );

  const history = useHistory();
  const arr = [];
  for (let i = 1; i <= allPages; i++) {
    arr.push(i);
  }
  console.log(history);
  useEffect(() => {
    getProducts(history);
  }, []);

  return (
    <div className="wrap">
      <div className="list">
        {productsData.length > 0 &&
          productsData.map((item) => (
            <AdminProductCard history={history} key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default AdminProductList;
