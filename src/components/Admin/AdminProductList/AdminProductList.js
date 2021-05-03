import React, { useContext, useEffect } from "react";
import { productContext } from "../../../context/ProductContext";
import "../../Products/ProductList.css";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
const AdminProductList = () => {
    const { getProducts, productsData } = useContext(productContext);

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        console.log(productsData, "this is products data");
    }, [productsData]);

    return (
        <div className="wrap">
            <div className="list">
                {productsData.length > 0 &&
                    productsData.map((item) => (
                        <AdminProductCard key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default AdminProductList;
