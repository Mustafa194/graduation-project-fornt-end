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
              <p className="fs-4">
                This website consists of several pages that are divided into two
                sections, the user section and the admin section. In the user
                section, students can visit the website and learn about the
                website and all the projects and a brief about Salahaddin
                University.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSystem;
