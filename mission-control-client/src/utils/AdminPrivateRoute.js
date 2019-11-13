import React from "react";
import { Route, Redirect } from "react-router-dom";
import decrypt from './decrypt';

const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <>
      <Route
        {...rest}
        render={props => {
          if (
            localStorage.getItem("token") &&
            (decrypt() === "admin" || decrypt() === "manager")
          ) {
            return <Component {...props} />;
          } else if (
            localStorage.getItem("token") &&
            (decrypt() !== "admin" || decrypt() !== "manager")
          ) {
            return (
              <Redirect to={`/${decrypt()}/dashboard`} />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </>
  );
};

export default PrivateRoute;