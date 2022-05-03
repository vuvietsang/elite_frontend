import React, { Component, useState } from "react";
import { Route } from "react-router-dom";

interface props {
  component: Component;
}
const ProtectedRoute = ({ component, ...rest }: props) => {
  const [isAuth, setIsAuth] = useState(false);
  return <Route {...rest} />;
};

export default ProtectedRoute;
