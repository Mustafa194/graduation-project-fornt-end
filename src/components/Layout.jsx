import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <Hero />

      <main>{children}</main>

      <BackToTop />

      <Footer />
    </>
  );
};

export default Layout;
