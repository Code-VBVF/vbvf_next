import React from "react";
import GlobalNav from "./global-nav";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <GlobalNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
