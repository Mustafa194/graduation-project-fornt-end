const OurSystem = () => {
  return (
    <section id="about" className="about mb-5">
      <div className="container" data-aos="fade-up">
        <div className="row position-relative">
          <div
            className="col-lg-7 about-img"
            style={{
              backgroundImage: "url(src/assets/images/our-system.jpg)",
            }}
          ></div>

          <div className="col-lg-7">
            <h2>Our System</h2>
            <div className="our-story">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSystem;
