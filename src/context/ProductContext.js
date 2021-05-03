import axios from "axios";
import React, { useReducer } from "react";

export const productContext = React.createContext();

const INIT_STATE = {
  productsData: [],
  productDetails: null,
  searchData: [],
  cart:{}
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TOPICS":
      return { ...state, productsData: action.payload };
    case "GET_TOPIC_DETAILS":
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
      type: "GET_TOPICS",
      payload: data,
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
  // --------------------КОРЗИНА-------------------------------
  function addProductToCart(product){
    let cart=JSON.parse(localStorage.getItem('cart'))
    if(!cart){
        cart={
            products: [],
            totalPrice:0
        }
    }
    let newProduct ={
        item: product,
        count:1,
        subPrice: 0
    }

    // let filteredCard = cart.products.filter(elem=>elem.item.id===product.id)
    // if( filteredCard.length>0){
    //    cart.products=cart.products.filter(elem=>elem.item.id!==product.id)
    // } else{
    //     cart.products.push(newProduct)
    // }
    
    // newProduct.subPrice=calcSubPrice(newProduct)
    // cart.totalPrice=calcTotalPrice(cart.products)
    // localStorage.setItem("cart", JSON.stringify(cart))

    // dispatch({
    //     type:"CHANGE_CART_COUNT",
    //     payload:cart.products.length
    // })
}
function getCard(){
    let cart=JSON.parse(localStorage.getItem('cart'))
    if(!cart){
        cart={
            products: [],
            totalPrice:0
        }
    }
    dispatch({
        type:"GET_CART",
        payload:cart
    })
}
// function changeProductCount(count, id){
//     let cart=JSON.parse(localStorage.getItem('cart'))
//     cart.products=cart.products.map(elem=>{
//         if (elem.item.id===id){
//             elem.count=count
//             elem.subPrice=calcSubPrice(elem)
//         }
//         return elem
//     })
//     cart.totalPrice=calcTotalPrice(cart.products)
//     localStorage.setItem("cart", JSON.stringify(cart))
//     getCard()
// }

  return (
    <productContext.Provider
      value={{
        productsData: state.productsData,
        productDetails: state.productDetails,
        searchData: state.searchData,
        cart:state.cart,
        postNewProduct,
        getProducts,
        getProductDetails,
        saveProduct,
        search,
        deleteProduct,
        addProductToCart,
        getCard
      }}
    >
      {children}
    </productContext.Provider>
  );
};
export default ProductContextProvider;
