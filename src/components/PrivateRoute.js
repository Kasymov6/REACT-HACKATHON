import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { authContext } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuth } = useContext(authContext);

  return (
    <>
      {Route ? (
        <Route {...rest} path={path} component={Component} />
      ) : (
        <Redirect path="/"></Redirect>
      )}
    </>
  );
};

export default PrivateRoute;
