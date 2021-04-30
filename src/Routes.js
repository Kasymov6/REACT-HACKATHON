import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./context/AuthContext";
import Header from "./components/Header/Header";

import HomePage from "./components/HomePage/HomePage";
import ProductContextProvider, {
    productContext,
} from "./context/ProductContext";
import Admin from "./components/Admin/Tabs";

const Routes = () => {
    return (
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
    );
};

export default Routes;
