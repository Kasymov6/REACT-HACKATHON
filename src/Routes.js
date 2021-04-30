import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./context/AuthContext";
import ProductContextProvider from "./context/ProductContext";
import Header from "./components/Header/Header";
const Routes = () => {
  return (
    <ProductContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/admin" component={AddProduct} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
    </ProductContextProvider>
  );
};

export default Routes;
