import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import "./../assets/css/Hero.css";

const Hero = () => {
  const location = useLocation();

  return (
    <section id="hero" className="hero">
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 data-aos="fade-down">
                Welcome to <span>Graduation Project Archive</span>
              </h2>
              <p data-aos="fade-up">
                Salahaddin University-Erbil (SUE) is the oldest and largest
                public comprehensive university in Kurdistan region was founded
                in 1968 in Sulaimani.
              </p>

              <HashLink
                data-aos="fade-up"
                data-aos-delay="200"
                to={
                  location.pathname.startsWith("/projects")
                    ? "#projects"
                    : "/projects#projects"
                }
                className="btn-explore-now"
              >
                Explore Now
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;