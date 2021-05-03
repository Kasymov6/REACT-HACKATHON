import axios from "axios";
import React, { useReducer } from "react";

export const productContext = React.createContext();

const INIT_STATE = {
  productsData: [],
  productDetails: null,
  searchData: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, productsData: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "SEARCH":
      return { ...state, searchData: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function postNewProduct(product) {
    axios.post("http://localhost:8000/products", product);
  }
  async function getProducts() {
    let { data } = await axios.get("http://localhost:8000/products");
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  }
  async function getProductDetails(id) {
    let { data } = await axios.get(`http://localhost:8000/products/${id}`);
    dispatch({
      type: "GET_PRODUCT_DETAILS",
      payload: data,
    });
  }

  async function saveProduct(id, newProduct) {
    await axios.patch(`http://localhost:8000/products/${id}`, newProduct);
    getProductDetails(id);
    getProducts();
  }
  async function search(value) {
    let { data } = await axios.get(`http://localhost:8000/products?q=${value}`);
    dispatch({
      type: "SEARCH",
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
        postNewProduct,
        getProducts,
        getProductDetails,
        saveProduct,
        search,
        deleteProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
export default ProductContextProvider;
