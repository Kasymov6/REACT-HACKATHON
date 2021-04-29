import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./context/AuthContext";
import TopicContextProvider from "./context/ProductContext";
const Routes = () => {
  return (
    <TopicContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/admin" component={AddProduct} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
    </TopicContextProvider>
  );
};

export default Routes;
