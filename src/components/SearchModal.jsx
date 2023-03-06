import Select from "react-select";
import { useState } from "react";

// import MultipleSelect from "./MultipleSelect";

const SearchModal = ({ setTempFilters }) => {
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [fromYear, setFromYear] = useState(new Date().getFullYear() - 1);
  const [toYear, setToYear] = useState(new Date().getFullYear());
  const [searchBy, setSearchBy] = useState("project");

  return (
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
              <Select
                // className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                options={[
                  { value: 1, label: "Science" },
                  { value: 2, label: "Engineering" },
                  { value: 3, label: "Education" },
                ]}
                onChange={(selectedOption) => setCollege(selectedOption.value)}
              />
            </div>

            <div className="mb-3">
              <label className="col-form-label">Select Departments</label>
              <Select
                // className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                options={[
                  { value: 1, label: "Computer Science and IT" },
                  { value: 2, label: "Chemistry" },
                  { value: 3, label: "Physics" },
                  { value: 4, label: "Biology" },
                ]}
                onChange={(selectedOption) =>
                  setDepartment(selectedOption.value)
                }
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
                    onChange={(event) => {
                      setFromYear(Number(event.target.value));
                    }}
                  />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="a"
                    onChange={(event) => {
                      setToYear(Number(event.target.value));
                    }}
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
                onChange={(event) => setSearchBy(event.target.value)}
              >
                <option value="project">Project Title</option>
                <option value="supervisor">Supervisor Name</option>
                <option value="student">Student name</option>
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
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                const filters = {
                  college,
                  department,
                  from: fromYear,
                  to: toYear,
                  searchBy,
                };
                console.log(filters);
                setTempFilters(filters);
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
