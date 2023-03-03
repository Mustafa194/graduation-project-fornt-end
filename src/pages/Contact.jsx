const Contact = () => {
  return (
    <>
      <h2 className="h2 text-center p-5">Contact</h2>
      <section id="contact" className="contact">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row gy-4">
            <div className="col-lg-3">
              <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-map"></i>
                <h3>Address</h3>
                <p>Erbil, Kerkuk Road</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-telephone"></i>
                <h3>Phone Number</h3>
                <p>+9647501223434</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-envelope"></i>
                <h3>Email</h3>
                <p>sue.krd@gmail.com</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-globe2"></i>
                <h3>Website</h3>
                <p>www.sue.com</p>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-1">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1610.5627286082972!2d44.016473!3d36.1635016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40072356796dbecf%3A0x774c582eea92b5c5!2z2LPbldix24baqdin24zbldiq24wg2LLYp9mG2qnbhtuMINiz25XZhNin2K3bldiv24zZhg!5e0!3m2!1sen!2siq!4v1677788098450!5m2!1sen!2siq"
                style={{ border: 0, width: "100%", height: "384px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
