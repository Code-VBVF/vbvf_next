import React from "react";
import Layout from "../components/layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
