import React from "react";
import Layout from "../src/components/layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/css/App.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
