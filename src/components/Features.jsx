import fastImage from "./../assets/images/fast.png";
import secureImage from "./../assets/images/secure.png";
import reliableImage from "./../assets/images/reliable.png";

const Features = () => {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Features</h2>
          <p>
            Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
            incidunt dolores placeat sunt id nobis omnis tiledo stran delop
          </p>
        </div>

        <div className="row gy-5">
          <div
            className="col-lg-4 col-md-6 member"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="member-img">
              <img src={reliableImage} className="img-fluid" alt="" />
            </div>
            <div className="member-info text-center">
              <h4>Reliable</h4>

              <p>
                Aliquam iure quaerat voluptatem praesentium possimus unde
                laudantium vel dolorum distinctio dire flow
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 member"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="member-img">
              <img src={secureImage} className="img-fluid" alt="" />
            </div>
            <div className="member-info text-center">
              <h4>More Secure</h4>
              <p>
                Labore ipsam sit consequatur exercitationem rerum laboriosam
                laudantium aut quod dolores exercitationem ut
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 member"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="member-img">
              <img src={fastImage} className="img-fluid" alt="" />
            </div>
            <div className="member-info text-center">
              <h4>Fast</h4>
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

export default Features;
