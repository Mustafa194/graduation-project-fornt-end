import { useState } from "react";

import SearchModal from "./SearchModal";

const Filters = ({ setFilters }) => {
  const [tempFilters, setTempFilters] = useState({});
  const [search, setSearch] = useState("");

  return (
    <section id="get-started" className="get-started section-bg bg-dark  py-4">
      <div className="container d-flex flex-wrap justify-content-center ">
        <div className="row mx-auto">
          <div className="col-auto">
            <SearchModal setTempFilters={setTempFilters} />
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
                onChange={(event) => setSearch(event.target.value)}
              />
              <button
                type="button"
                className="btn btn-warning text-light"
                onClick={() => {
                  setFilters({ ...tempFilters, search });
                }}
              >
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
