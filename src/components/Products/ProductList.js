import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import "./ProductList.css";
const ProductList = () => {
    const { getProducts, productsData, setPage, allPages } = useContext(
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
                {productsData.map((item) => (
                    <ProductCard key={item.id} item={item} />
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

export default ProductList;
