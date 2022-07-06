import React from "react";
import GlobalNav from "./global-nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalNav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
