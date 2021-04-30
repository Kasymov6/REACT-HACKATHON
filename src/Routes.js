import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./context/AuthContext";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

const Routes = () => {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Main" component={Main} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                </Switch>
            </BrowserRouter>
        </AuthContextProvider>
    );
};

export default Routes;
