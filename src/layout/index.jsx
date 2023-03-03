import { Outlet } from "react-router-dom";

import Header from "./Header";
import Hero from "../components/Hero";
import Footer from "./Footer";
import BackToTop from "../components/BackToTop";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <Hero />

      <Outlet />
      <main>{children}</main>

      <Footer />

      <BackToTop />
    </>
  );
};

export default Layout;
