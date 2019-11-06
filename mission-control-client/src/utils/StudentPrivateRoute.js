import React from "react";
import decrypt from './decrypt';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={props => {
          if (
            localStorage.getItem("token") &&
            decrypt() === "student"
          ) {
            return <Component {...props} />;
          } else if (
            localStorage.getItem("token") &&
            decrypt() !== "student"
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
