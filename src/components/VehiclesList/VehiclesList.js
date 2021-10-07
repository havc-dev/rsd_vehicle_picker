import { useContext, useEffect } from "react";
import AppContext from "../../context/appContext";

import Vehicle from "../Vehicle/Vehicle";

const VehiclesList = () => {
  const ctx = useContext(AppContext)
  const {vehiclesList, drivingInfo, setDrivingInfo} = ctx

useEffect(() => {
  let userDriving = localStorage.getItem('myDriving')
  console.log(userDriving)
  setDrivingInfo(userDriving)
}, [setDrivingInfo])
  return (
    <>
      <ul>
        {vehiclesList.map((vehicle, idx) => (
          <li className="w-11/12 mx-auto border border-gray-500 rounded py-5 my-5" key={idx} >
            <Vehicle
              vehicle={vehicle}
              drivingInfo={drivingInfo}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default VehiclesList;
