import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="site-container">
      <Nav />
      <>{children}</>
    </div>
  );
};

export default Layout;
