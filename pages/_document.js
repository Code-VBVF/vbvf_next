import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Open+Sans:wght@400;600;800&family=Volkhov:wght@400;700&family=Work+Sans:wght@400;500;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://badger.vbvf.org/script.js"
          site="PYFFDTIM"
          defer
        ></script>
        <script src="https://js.churchcenter.com/modal/v1"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
