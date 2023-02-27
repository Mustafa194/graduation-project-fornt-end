import ourSystemImage from "./../../../assets/images/our-system-image.png";

const OurSystem = () => {
  return (
    <section className="our-system container p-5 align-middle">
      <div className="row">
        <div className="col-lg m-3">
          <div className="img-container">
            <img
              src={ourSystemImage}
              alt="System Image"
              className="img-thumbnail"
            />
          </div>
        </div>

        <div className="col-lg m-3">
          <div className="row">
            <div className="description">
              <h3 className="fs-1">Our System</h3>
              <p className="display-6 fs-3">
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
