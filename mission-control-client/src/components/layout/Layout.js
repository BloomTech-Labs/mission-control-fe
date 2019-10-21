import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const style = {
    backgroundColor: "#E5E5E5"
};

const Layout = ({ children }) => {
  return (
    <div style={style}>
      <Nav />
      <>{children}</>
    </div>
  );
};

export default Layout;
