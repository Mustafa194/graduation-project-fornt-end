const Features = () => {
  return (
    <div
      className="features text-center pt-5 pb-5"
      style={{ background: "#D9D9D9" }}
    >
      <div className="container">
        <div className="main-title mt-5 mb-5 position-relative">
          {/* <img className="mb-4" src="imgs/title.png" alt="" /> */}
          <h2>We are Good at</h2>
          <p className="text-black-50 text-uppercase">
            Some Of These Stuff Under
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="feat">
              <div className="icon-holder position-relative">
                <i className="fa-solid align-center fa-pencil fa-4x position-absolute bottom-0 icon"></i>
              </div>
              <h4 className="mb-3 mt-3 text-uppercase">Graphic Design</h4>
              <p className="text-black-50 lh-lg">
                Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="feat">
              <div className="icon-holder position-relative">
                <i className="fa-solid fa-tv fa-4x position-absolute bottom-0 icon"></i>
              </div>
              <h4 className="mb-3 mt-3 text-uppercase">Graphic Design</h4>
              <p className="text-black-50 lh-lg">
                Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="feat">
              <div className="icon-holder position-relative">
                <i className="fa-solid fa-plug fa-4x position-absolute bottom-0 icon"></i>
              </div>
              <h4 className="mb-3 mt-3 text-uppercase">Graphic Design</h4>
              <p className="text-black-50 lh-lg">
                Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
