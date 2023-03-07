import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {/* <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li> */}
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
