import Property from "../Properties/Property";
import "./VehicleModel.css";

const VehicleModel = (props) => {
  const { vehicleBasics, onClick, vehicleModel } = props;
  return (
    <div className="vehicle">
      <h2>{vehicleBasics}</h2>
      <Property property="year" value={vehicleModel.year} />
      <Property property="transmission" value={vehicleModel.transmission} />
      <Property
        property="motor power"
        value={vehicleModel.motor_power}
        units="hp"
      />
      <Property property="tyre type" value={vehicleModel.tyre_type} />
      <Property property="warranty" value={vehicleModel.warranty} units="km" />
      <button className="toggle-vehicle-data" onClick={onClick}>
        More Info
      </button>
    </div>
  );
};

export default VehicleModel;
