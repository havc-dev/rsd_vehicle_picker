import { useContext } from "react";
import { FormContext } from "../../../../VehicleInfoFormContext";

const Checkbox = ({ field_id, field_label, field_value, }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="form-checkbox">
      <label className="form-checkbox_label">{field_label}</label>
      <input
        className="form-checkbox_input"
        type="checkbox"
        id={field_id}
        checked={field_value}
        onChange={(event) => handleChange(field_id, event)}
      />
    </div>
  );
};

export default Checkbox;
