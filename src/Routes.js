import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./context/AuthContext";
<<<<<<< HEAD
import ProductContextProvider from "./context/ProductContext";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

const Routes = () => {
  return (
    <ProductContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/admin" component={AddProduct} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
    </ProductContextProvider>
=======
import Header from "./components/Header/Header"
import Main from "./components/Main/Main";

const Routes = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
      <Header />
        <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/login" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
>>>>>>> 098889a2e4e56d1d098510ad7d58bc7b6b20c2e0
  );
};

export default Routes;
