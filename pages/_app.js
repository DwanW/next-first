import "../styles/globals.css";
import Layout from "../components/Layout";

// this is a wrapper for the page components for global styles, layout
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
