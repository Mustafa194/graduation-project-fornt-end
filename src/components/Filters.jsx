import MultipleSelect from "./MultipleSelect";

const Filters = () => {
  return (
    <section id="get-started" className="get-started section-bg bg-dark  py-4">
      <div className="container d-flex flex-wrap justify-content-center ">
        <div className="row mx-auto">
          <div className="col-auto">
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content ">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Filter Projects
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body bg-body-tertiary">
                    <div className="mb-2">
                      <label className="col-form-label">Select College</label>
                      <MultipleSelect
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                        data={[
                          { value: 1, label: "Science" },
                          { value: 2, label: "Engineering" },
                          { value: 3, label: "Education" },
                        ]}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="col-form-label">
                        Select Departments
                      </label>
                      <MultipleSelect
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                        data={[
                          { value: 1, label: "Computer Science and IT" },
                          { value: 2, label: "Chemistry" },
                          { value: 3, label: "Physics" },
                          { value: 4, label: "Biology" },
                        ]}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="col-form-label">Year</label>
                      <div className="input-group mb-3">
                        <div className="form-floating mb-3">
                          <input
                            type="number"
                            className="form-control"
                            id="floatingInput"
                            placeholder="a"
                          />
                          <label htmlFor="floatingInput">From</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="number"
                            className="form-control"
                            id="floatingInput"
                            placeholder="a"
                          />
                          <label htmlFor="floatingInput">To</label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <label className="col-form-label">Serach By</label>
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option>Project Title</option>
                        <option>Supervisor Name</option>
                        <option>Student name</option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-warning">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
