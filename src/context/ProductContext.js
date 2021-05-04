import { red } from "@material-ui/core/colors";
import axios from "axios";
<<<<<<< HEAD
import React, { useReducer } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../components/helpers/calcPrice";
export const productContext = React.createContext();

const INIT_STATE = {
  productsData: [],
  productDetails: null,
  cart: {},
  searchData: [],
  cartLength: getCountProductsInCart,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, productsData: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "SEARCH":
      return { ...state, searchData: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
=======
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
>>>>>>> aaefb6a3588aa33eed525e8a858c67dab692ed83
};
const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [page, setPage] = useState("");

<<<<<<< HEAD
  function addProductToCart(product) {
    console.log(product);
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: 0,
    };

    let filteredCart = cart.products.filter(
      (elem) => elem.item.id === product.id
    );
    if (filteredCart.length > 0) {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }

    console.log(newProduct);
    newProduct.subPrice = calcSubPrice(newProduct);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }

  function changeProductCount(count, id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function checkProductCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newCart = cart.products.filter((elem) => elem.item.id === id);
    return newCart.length > 0 ? true : false;
  }
=======
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
>>>>>>> aaefb6a3588aa33eed525e8a858c67dab692ed83

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
<<<<<<< HEAD
export default ProductContextProvider;
=======

export default ProductContextProvider;
>>>>>>> aaefb6a3588aa33eed525e8a858c67dab692ed83
