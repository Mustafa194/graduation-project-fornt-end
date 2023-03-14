import fastImage from "./../../../assets/images/fast.png";

const OurPurposes = () => {
  return (
    <section className=" bg-body-secondary pt-5">
      <div className="container" data-aos="fade-up">
        <div className="section-header py-5">
          <h2>Our purposes</h2>
          <p></p>
        </div>

        <div className="row gy-4 text-center g-5">
          <div
            className="col-lg-3 col-md-6 member"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="member-img">
              <img src={fastImage} className="img-fluid" alt="" />
            </div>
            <div className="member-info text-center">
              <h4>Fast</h4>
              <span></span>
              <p>
                Illum minima ea autem doloremque ipsum quidem quas aspernatur
                modi ut praesentium vel tque sed facilis at qui
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 member"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="member-img">
              <img src={fastImage} className="img-fluid" alt="" />
            </div>
            <div className="member-info text-center">
              <h4>Fast</h4>
              <span></span>
              <p>
                Illum minima ea autem doloremque ipsum quidem quas aspernatur
                modi ut praesentium vel tque sed facilis at qui
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 member"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="member-img">
              <img src={fastImage} className="img-fluid" alt="" />
            </div>
            <div className="member-info text-center">
              <h4>Fast</h4>
              <span></span>
              <p>
                Illum minima ea autem doloremque ipsum quidem quas aspernatur
                modi ut praesentium vel tque sed facilis at qui
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 member"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="member-img">
              <img src={fastImage} className="img-fluid" alt="" />
            </div>
            <div className="member-info text-center">
              <h4>Fast</h4>
              <span></span>
              <p>
                Illum minima ea autem doloremque ipsum quidem quas aspernatur
                modi ut praesentium vel tque sed facilis at qui
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPurposes;
