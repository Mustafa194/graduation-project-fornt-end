import Select from "react-select";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import BootstrapModal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";

const SelectWrapper = ({ inputRef, onChange, options, ...otherProps }) => {
  function handleChange(event) {
    // Overwrite the event with your own object if it doesn't exist
    if (!event) {
      event = {
        target: inputRef,
        value: "",
      };
    }
    onChange(event);
  }

  return (
    // Pass in the custom handleChange
    <Select
      isClearable
      isSearchable
      id="floatingSelect"
      aria-label="Floating label select example"
      options={options}
      onChange={handleChange}
      {...otherProps}
    />
  );
};

// const SearchModal = ({ setTempFilters, ...props }) => {
//   const [colleges, setColleges] = useState("");
//   const [departments, setDepartments] = useState("");
//   const [fromYear, setFromYear] = useState(new Date().getFullYear() - 1);
//   const [toYear, setToYear] = useState(new Date().getFullYear());
//   const [searchBy, setSearchBy] = useState({
//     value: "project",
//     label: "Project Title",
//   });
//   const [selectedCollege, setSelectedCollege] = useState(null);
//   const [selectedDepartment, setSelectedDepartment] = useState(null);
//   const collegeSelectRef = useRef();
//   const departmentSelectRef = useRef();
//   const searchBySelectRef = useRef();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data: collegeData } = await axios.get(
//           "http://localhost:4444/colleges"
//         );
//         setColleges(
//           collegeData.colleges.map((college) => {
//             return {
//               value: college.id,
//               label: college.name,
//             };
//           })
//         );
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       console.log(selectedCollege);
//       try {
//         const { data: departmentsData } = await axios.get(
//           "http://localhost:4444/departments"
//         );
//         setDepartments(
//           selectedCollege
//             ? departmentsData.departments
//                 .filter(
//                   (department) => department.collegeId === selectedCollege
//                 )
//                 .map((department) => {
//                   return {
//                     value: department.id,
//                     label: department.name,
//                   };
//                 })
//             : departmentsData.departments.map((department) => {
//                 return {
//                   value: department.id,
//                   label: department.name,
//                 };
//               })
//         );
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [selectedCollege]);

//   return (
//     <div
//       className="modal fade"
//       id="exampleModal"
//       tabIndex="-1"
//       aria-labelledby="exampleModalLabel"
//       aria-hidden="true"
//     >
//       <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//         <div className="modal-content ">
//           <div className="modal-header">
//             <h1 className="modal-title fs-5" id="exampleModalLabel">
//               Filter Projects
//             </h1>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div className="modal-body bg-body-tertiary">
//             <div className="mb-2">
//               <label className="col-form-label">Select College</label>
//               <SelectWrapper
//                 inputRef={collegeSelectRef}
//                 onChange={(selectedOption) =>
//                   setSelectedCollege(selectedOption.value)
//                 }
//                 options={colleges}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="col-form-label">Select Departments</label>
//               <SelectWrapper
//                 options={departments}
//                 onChange={(selectedOption) =>
//                   setSelectedDepartment(selectedOption.value)
//                 }
//                 inputRef={departmentSelectRef}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="col-form-label">Year</label>
//               <div className="input-group mb-3">
//                 <div className="form-floating mb-3">
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="floatingInput"
//                     placeholder="a"
//                     onChange={(event) => {
//                       setFromYear(Number(event.target.value));
//                     }}
//                   />
//                   <label htmlFor="floatingInput">From</label>
//                 </div>
//                 <div className="form-floating mb-3">
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="floatingInput"
//                     placeholder="a"
//                     onChange={(event) => {
//                       setToYear(Number(event.target.value));
//                     }}
//                   />
//                   <label htmlFor="floatingInput">To</label>
//                 </div>
//               </div>
//             </div>

//             <div className="mb-2">
//               <label className="col-form-label">Search By</label>
//               <SelectWrapper
//                 // className="form-select"
//                 onChange={(selectedOption) => setSearchBy(selectedOption)}
//                 options={[
//                   { value: "project", label: "Project Title" },
//                   { value: "supervisor", label: "Supervisor Name" },
//                   { value: "student", label: "Student Name" },
//                 ]}
//                 inputRef={searchBySelectRef}
//                 id="floatingSelect"
//                 aria-label="Floating label select example"
//               />
//             </div>
//           </div>
//           <div className="modal-footer">
//             <button
//               type="button"
//               className="btn btn-outline-dark"
//               data-bs-dismiss="modal"
//             >
//               Close
//             </button>
//             <button
//               type="button"
//               className="btn btn-warning"
//               onClick={() => {
//                 const filters = {
//                   college: colleges,
//                   department: departments,
//                   from: fromYear,
//                   to: toYear,
//                   searchBy,
//                 };
//                 setTempFilters(filters);
//               }}
//             >
//               Apply
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Modal = ({ setTempFilters, setModalShow, ...props }) => {
  const [colleges, setColleges] = useState("");
  const [departments, setDepartments] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  // const [searchBy, setSearchBy] = useState({
  //   value: "project",
  //   label: "Project Title",
  // });
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const collegeSelectRef = useRef();
  const departmentSelectRef = useRef();
  const searchBySelectRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: collegeData } = await axios.get(
          "http://localhost:4444/colleges"
        );
        setColleges(
          collegeData.colleges.map((college) => {
            return {
              value: college.id,
              label: college.name,
            };
          })
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: departmentsData } = await axios.get(
          "http://localhost:4444/departments"
        );
        setDepartments(
          selectedCollege
            ? departmentsData.departments
                .filter(
                  (department) => department.collegeId === selectedCollege
                )
                .map((department) => {
                  return {
                    value: department.id,
                    label: department.name,
                  };
                })
            : departmentsData.departments.map((department) => {
                return {
                  value: department.id,
                  label: department.name,
                };
              })
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedCollege]);

  return (
    <BootstrapModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setModalShow(false)}
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title id="contained-modal-title-vcenter">
          Filters
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <div className="mb-2">
          <label className="col-form-label">Select College</label>
          <SelectWrapper
            inputRef={collegeSelectRef}
            onChange={(selectedOption) =>
              setSelectedCollege(selectedOption.value)
            }
            options={colleges}
          />
        </div>

        <div className="mb-3">
          <label className="col-form-label">Select Departments</label>
          <SelectWrapper
            options={departments}
            onChange={(selectedOption) =>
              setSelectedDepartment(selectedOption.value)
            }
            inputRef={departmentSelectRef}
          />
        </div>

        <div className="mb-3">
          <label className="col-form-label">Year</label>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="a"
              onChange={(event) => {
                setYear(Number(event.target.value));
              }}
            />
            <label htmlFor="floatingInput">Year</label>
          </div>
        </div>

        {/* <div className="mb-2">
          <label className="col-form-label">Search By</label>
          <SelectWrapper
            // className="form-select"
            onChange={(selectedOption) => setSearchBy(selectedOption)}
            options={[
              { value: "project", label: "Project Title" },
              { value: "supervisor", label: "Supervisor Name" },
              { value: "student", label: "Student Name" },
            ]}
            inputRef={searchBySelectRef}
            id="floatingSelect"
            aria-label="Floating label select example"
          />
        </div> */}
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <button
          type="button"
          className="btn btn-outline-dark"
          data-bs-dismiss="modal"
          onClick={() => setModalShow(false)}
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            const filters = {
              college: selectedCollege,
              department: selectedDepartment,
              year,
              // searchBy: searchBy.value,
            };
            setTempFilters(filters);
            setModalShow(false);
          }}
        >
          Apply
        </button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

// export default SearchModal;
export default Modal;
