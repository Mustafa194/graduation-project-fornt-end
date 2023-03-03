import SearchModal from "./SearchModal";

const Filters = () => {
  return (
    <section id="get-started" className="get-started section-bg bg-dark  py-4">
      <div className="container d-flex flex-wrap justify-content-center ">
        <div className="row mx-auto">
          <div className="col-auto">
            <SearchModal />
          </div>

          <div className="col-auto">
            <div className="input-group input-group-lg">
              <button
                type="button"
                className="btn btn-outline-warning"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="bi bi-filter"></i>
              </button>
              <input
                type="text"
                className="form-control border-warning"
                placeholder="Search"
              />
              <button type="button" className="btn btn-warning text-light">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
