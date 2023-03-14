const OurTeam = () => {
  return (
    <section id="" className="p-5 bg-body-secondary">
      <div className="container ">
        <div className="section-header pb-5">
          <h2>Our Team</h2>
          <p></p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                {/* <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                /> */}
                <h3
                  className="card-title fs-2 mb-3"
                  style={{ fontWeight: "bold" }}
                >
                  Yousif Q. Khalid
                </h3>
                <p className="card-text fs-4" style={{ fontWeight: "bold" }}>
                  UI/UX Designer
                </p>
                <a href="#">
                  <i className="bi fs-3 bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi fs-3 bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi fs-3 bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi fs-3 bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                {/* <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                /> */}
                <h3
                  className="card-title fs-2 mb-3"
                  style={{ fontWeight: "bold" }}
                >
                  Mohammed Z. Ahmed
                </h3>
                <p className="card-text fs-4" style={{ fontWeight: "bold" }}>
                  Front-End Developer
                </p>
                <a href="#">
                  <i className="bi fs-3 bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi fs-3 bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi fs-3 bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi fs-3 bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                {/* <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                /> */}
                <h3
                  className="card-title fs-2 mb-3"
                  style={{ fontWeight: "bold" }}
                >
                  Mustafa A. Mohammed
                </h3>
                <p className="card-text fs-4" style={{ fontWeight: "bold" }}>
                  Back-End Developer
                </p>
                <a href="#">
                  <i className="bi fs-3 bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi fs-3 bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi fs-3 bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi fs-3 bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
