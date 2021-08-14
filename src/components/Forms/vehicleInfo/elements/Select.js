import { useContext } from "react";
import { FormContext } from "../../../../VehicleInfoFormContext";

const Select = ({ field_id, field_label, field_options }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <>
      <label className="form-input_label" htmlFor="asdf">
        {field_label}
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(event) => handleChange(field_id, event)}
      >
        <option>{field_label}</option>
        {field_options
          ? field_options.map((option, i) => (
              <option value={option.option_label} key={i}>
                {option.option_label}
              </option>
            ))
          : null}
      </select>
    </>
  );
};

export default Select;
