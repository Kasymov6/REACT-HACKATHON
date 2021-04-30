import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./context/AuthContext";
<<<<<<< HEAD
import Header from "./components/Header/Header"
import Main from "./components/Main/Main";
import Cards from "./components/Card/Cards"
=======
import Header from "./components/Header/Header";
>>>>>>> 07a144cc85010e3c2db723e55a09bb076cdbeba4

import HomePage from "./components/HomePage/HomePage";
import ProductContextProvider, {
  productContext,
} from "./context/ProductContext";
import Admin from "./components/Admin/Tabs";
const Routes = () => {
  return (
<<<<<<< HEAD
    <AuthContextProvider>
      <BrowserRouter>
      <Header />
        <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/login" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/shopping-cart" component={Cards}/>
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
=======
    <ProductContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
    </ProductContextProvider>
>>>>>>> 07a144cc85010e3c2db723e55a09bb076cdbeba4
  );
};

export default Routes;
