import { useContext } from "react";
import { FormContext } from "../../../../VehicleInfoFormContext";

const Input = ({ field_id, field_label, field_placeholder, field_value }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="form-input">
      <label className="form-input_label" htmlFor="asdf">
        {field_label}
      </label>
      <input
        className="form-input_field"
        type="text"
        id={field_id}
        aria-describedby="emailHelp"
        placeholder={field_placeholder ? field_placeholder : ""}
        value={field_value}
        onChange={(event) => handleChange(field_id, event)}
      />
    </div>
  );
};

export default Input;
