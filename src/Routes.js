import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
const Routes = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch></Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default Routes;
