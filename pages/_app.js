import "../styles/globals.css";
import { Layout, Sidebar, Footer } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Sidebar />
      <div className="absolute bg-gray-100 top-24 xl:top-0 right-0 w-full xl:w-[79%]">
        <Component {...pageProps} />;
        <Footer />
      </div>
    </Layout>
  );
}

export default MyApp;
