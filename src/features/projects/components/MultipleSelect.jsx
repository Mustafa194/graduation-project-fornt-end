import Select from "react-select";

// data should be an array
const MultipleSelect = ({ data }) => (
  <Select
    // defaultValue={data}
    isMulti
    name="colors"
    options={data}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);

export default MultipleSelect;
