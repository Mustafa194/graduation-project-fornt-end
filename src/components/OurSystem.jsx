const OurSystem = () => {
  return (
    <>
      <section id="about" className="our-system about mb-5">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative">
            <div
              className="col-lg-7 about-img"
              style={{
                backgroundImage: 'url("src/assets/images/our-system.jpg")',
              }}
            ></div>

            <div className="col-lg-7">
              <h2>Our System</h2>
              <div className="our-story">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section classNameName="our-system container p-5 align-middle">
        <div classNameName="row">
          <div classNameName="col-lg m-3">
            <div classNameName="img-container">
              <img
                src={ourSystemImage}
                alt="System Image"
                classNameName="img-thumbnail"
              />
            </div>
          </div>

          <div classNameName="col-lg m-3">
            <div classNameName="row">
              <div classNameName="description">
                <h3 classNameName="fs-1">Our System</h3>
                <p classNameName="display-6 fs-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default OurSystem;
