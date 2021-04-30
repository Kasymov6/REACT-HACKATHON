import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./context/AuthContext";
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
  );
};

export default Routes;
