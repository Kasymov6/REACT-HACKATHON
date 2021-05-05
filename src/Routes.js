import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./context/AuthContext";
import Header from "./components/Header/Header";
import Carts from "./components/Card/Carts";

import HomePage from "./components/HomePage/HomePage";
import ProductContextProvider, {
    productContext,
} from "./context/ProductContext";
import Admin from "./components/Admin/Tabs";
import ProductDetails from "./components/Products/ProductDetails";
import PrivateRoute from "./components/PrivateRoute";

import ProductList from "./components/Products/ProductList";
import Footer from "./components/Footer/Footer";
import Filter from "./components/Filter/Filter";
import Partners from "./components/Partners/Partners";

const Routes = () => {
    return (
        <ProductContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <PrivateRoute path="/admin" component={Admin} />
                        {/* <PrivateRoute path="/order" component={Order} /> */}
                        <Route exact path="/products" component={ProductList} />
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/filter" component={Filter} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/cart" component={Carts} />
                        <Route exact path="/partners" component={Partners} />
                        <Route
                            exact
                            path="/details/:id"
                            component={ProductDetails}
                        />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </AuthContextProvider>
        </ProductContextProvider>
    );
};

export default Routes;
