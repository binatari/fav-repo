import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
// import { ThemeProvider } from "tailwind-darkmode-toggle";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="shortcut icon" href="/assets/fave.png" />
        <title>Favour Momoh</title>
      </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>{" "}

    </>
  );
}

export default MyApp;
