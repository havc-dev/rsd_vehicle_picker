import React, { useState } from "react";
import VehicleDetails from "./VehicleDetails";
import ToggleButton from '../Buttons/ToggleButton'
import VehicleBalance from "./VehicleBalance";

const Vehicle = ({ vehicle, drivingInfo }) => {
  const [showVehicleDetails, setShowVehicleDetails] = useState(false);
  const [showVehicleBalance, setShowVehicleBalance] = useState(false);
  const vehicleBasics = `${vehicle.make} ${vehicle.model} ${vehicle.submodel} ${vehicle.year}`;
  const cardToggleHandler = () => {
    setShowVehicleDetails(!showVehicleDetails);
  };
  const balanceToggleHandler = () => {
    setShowVehicleBalance(!showVehicleBalance);
    setShowVehicleDetails(false)
  };
  return (
    <li className="w-full">
      <div className="flex flex-col">
        <h3>{vehicleBasics}</h3>
        <ToggleButton text="Vehicle details" onClick={cardToggleHandler}/>
        <ToggleButton text="Vehicle balance" onClick={balanceToggleHandler}/>
      </div>
      {showVehicleDetails ? (
        <VehicleDetails
          vehicle={vehicle}
          drivingInfo={drivingInfo}
        />
      ) : null}
      {showVehicleBalance ? (
        <VehicleBalance
          vehicle={vehicle}
          drivingInfo={drivingInfo}
        />
      ) : null}
    </li>
  );
};

export default Vehicle;
