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
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">John Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Jane Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Steve Smith</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram text-dark mx-1"></i>
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
