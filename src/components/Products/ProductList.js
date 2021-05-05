import Pagination from "@material-ui/lab/Pagination";
import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import { useHistory } from "react-router-dom";
import "./ProductList.css";

const ProductList = (props) => {
    const history = useHistory();
    const { getProducts, productsData, paginationPages } = useContext(
        productContext
    );
    const [page, setPage] = useState(getPage());

    function getPage() {
        const search = new URLSearchParams(history.location.search);
        return search.get("_page");
    }

    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search);
        search.set("_page", page);
        history.push(`${history.location.pathname}?${search.toString()}`);
        setPage(page);
        getProducts(history);
    };

    useEffect(() => {
        getProducts(history);
    }, []);

    return (
        <div className="wrap">
            <div className="list">
                {productsData.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
            <Pagination
                page={+page}
                onChange={handlePage}
                count={paginationPages}
                color="primary"
            />
        </div>
    );
};

export default ProductList;
