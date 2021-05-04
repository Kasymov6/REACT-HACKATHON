import React, { useContext, useEffect } from "react";
import { productContext } from "../../../context/ProductContext";
import "../../Products/ProductList.css";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
import "./AdminProductList.css";

const AdminProductList = () => {
    const { getProducts, productsData, allPages, setPage } = useContext(
        productContext
    );

    const arr = [];
    for (let i = 1; i <= allPages; i++) {
        arr.push(i);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="wrap">
            <div className="list">
                {productsData.length > 0 &&
                    productsData.map((item) => (
                        <AdminProductCard key={item.id} item={item} />
                    ))}
            </div>
            <div className="pagination">
                {arr.map((page) => (
                    <button className="pageBtn" onClick={() => setPage(page)}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AdminProductList;
