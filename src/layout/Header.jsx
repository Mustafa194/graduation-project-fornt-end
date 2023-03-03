import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import logo from "./../assets/images/logo.png";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            width="40"
            className="d-inline-block align-text-top"
          />
          <h1>
            Salahadin Universty Erbil <span>(SUE)</span>
          </h1>
        </Link>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
