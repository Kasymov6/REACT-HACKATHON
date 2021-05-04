import axios from "axios";
import React, { useReducer, useState, useEffect } from "react";

export const productContext = React.createContext();

const INIT_STATE = {
    productsData: [],
    productDetails: null,
    allPages: 0,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_TOPICS":
            return {
                ...state,
                productsData: action.payload,
                allPages: action.num,
            };
        case "GET_TOPIC_DETAILS":
            return { ...state, productDetails: action.payload };
        default:
            return state;
    }
};

const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [page, setPage] = useState("");

    useEffect(() => {
        getProducts();
    }, [page]);

    function postNewProduct(product) {
        axios.post("http://localhost:8000/products", product);
    }

    async function getProducts() {
        let res = await axios.get(
            `http://localhost:8000/products?_page=${page}&_limit=3`
        );
        let num = Math.ceil(res.headers["x-total-count"] / 3);
        dispatch({
            type: "GET_TOPICS",
            payload: res.data,
            num: num,
        });
    }

    async function getProductDetails(id) {
        let { data } = await axios.get(`http://localhost:8000/products/${id}`);
        dispatch({
            type: "GET_TOPIC_DETAILS",
            payload: data,
        });
    }

    async function saveProduct(id, newProduct) {
        await axios.patch(`http://localhost:8000/products/${id}`, newProduct);
        getProductDetails(id);
        getProducts();
    }
    async function search(value) {
        let { data } = await axios.get(
            `http://localhost:8000/products?q=${value}&_limit=3`
        );
        dispatch({
            type: "GET_TOPICS",
            payload: data,
        });
    }

    async function deleteProduct(id) {
        return await axios.delete(`http://localhost:8000/products/${id}`);
    }

    return (
        <productContext.Provider
            value={{
                productsData: state.productsData,
                productDetails: state.productDetails,
                searchData: state.searchData,
                allPages: state.allPages,
                postNewProduct,
                getProducts,
                getProductDetails,
                saveProduct,
                search,
                deleteProduct,
                setPage,
            }}
        >
            {children}
        </productContext.Provider>
    );
};
export default ProductContextProvider;
