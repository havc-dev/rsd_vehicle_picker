import React, { useState } from "react";
import VehicleDetails from "./VehicleDetails";
import VehicleBalance from "./VehicleBalance";

import TabButton from "../Buttons/TabButton";
import DeleteIcon from "../Icons/DeleteIcon.js";

const Vehicle = ({ vehicle, drivingInfo, key }) => {
  const [showVehicleDetails, setShowVehicleDetails] = useState(false);
  const [showVehicleBalance, setShowVehicleBalance] = useState(false);
  const vehicleBasics = `${vehicle.make} ${vehicle.model} ${vehicle.submodel} ${vehicle.year}`;
  const cardToggleHandler = () => {
    setShowVehicleDetails(!showVehicleDetails);
    setShowVehicleBalance(false);
  };
  const balanceToggleHandler = () => {
    setShowVehicleBalance(!showVehicleBalance);
    setShowVehicleDetails(false);
  };
  const deleteVehicleHandler = (e) => {
    console.log(e.target);
  };
  const id = key;
  return (
    <div className='flex flex-col w-11/12 mx-auto' id={id}>
      <div className='flex flex-row justify-between align-middle w-11/12 mx-auto'>
        <h4 className='align-middle text-left mx-0 w-9/12'>{vehicleBasics}</h4>
        <DeleteIcon
          color='red'
          width='20px'
          onClick={deleteVehicleHandler}
          id={id}
        />
      </div>
      <div>
        {/* <ToggleButton text="Vehicle details" onClick={cardToggleHandler}/>
        <ToggleButton text="Vehicle balance" onClick={balanceToggleHandler}/> */}
        <TabButton text='details' onClick={cardToggleHandler} />
        <TabButton text='Vehicle balance' onClick={balanceToggleHandler} />
      </div>
      <div>
        {showVehicleDetails ? (
          <VehicleDetails vehicle={vehicle} drivingInfo={drivingInfo} />
        ) : null}
        {showVehicleBalance ? (
          <VehicleBalance vehicle={vehicle} drivingInfo={drivingInfo} />
        ) : null}
      </div>
    </div>
  );
};

export default Vehicle;
