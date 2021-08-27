import React, { useState } from "react";
import VehicleDetails from "./VehicleDetails";
import ToggleButton from '../Buttons/ToggleButton'

const Vehicle = ({ vehicle, drivingInfo }) => {
  const [showVehicleDetails, setShowVehicleDetails] = useState(false);
  const vehicleBasics = `${vehicle.make} ${vehicle.model} ${vehicle.submodel} ${vehicle.year}`;
  const cardToggleHandler = () => {
    setShowVehicleDetails(!showVehicleDetails);
  };
  return (
    <li className="list">
      <div className="">
        <p className="text-accent-light">{vehicleBasics}</p>
        <ToggleButton text="+ Info" onClick={cardToggleHandler}/>
      </div>
      {showVehicleDetails ? (
        <VehicleDetails
          vehicle={vehicle}
          drivingInfo={drivingInfo}
        />
      ) : null}
    </li>
  );
};

export default Vehicle;
