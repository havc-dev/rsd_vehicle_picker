import React, { useState } from "react";
import VehicleDetails from "./VehicleDetails";
import ToggleButton from '../Buttons/ToggleButton'
import VehicleBalance from "./VehicleBalance";
import Delete from "../Icons/Delete";

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
  const deleteVehicleHandler = () => {
    console.log('borrar')
  }
  return (
    <li className="w-full">
      <div className="flex flex-col">
        <div className="flex align-middle mx-auto">
          <h3>{vehicleBasics}</h3>
          <Delete color="red" width="20px" onClick={deleteVehicleHandler} />
        </div>
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
