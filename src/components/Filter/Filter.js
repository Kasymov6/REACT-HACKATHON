import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";
import { productContext } from "../../context/ProductContext";
import "./Filter.css";

const Filter = () => {
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
        <div className="main-div">
            <div className="filter-price">
                <h1>Цены</h1>
                <h1>Мужские часы</h1>
                <h1>Женские часы</h1>
            </div>
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

export default Filter;
