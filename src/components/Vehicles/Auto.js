import { useState } from "react";

import VehicleModel from "../Vehicle/VehicleModel";
import VehicleCosts from "../Vehicle/VehicleCosts";
import VehicleConsumptions from "../Vehicle/VehicleConsumptions";

import "./Auto.css";

const Auto = (props) => {
  const { vehicle, work } = props;
  //making sure I dont get NaN
  let costs = vehicle.costs;
  let downpayment = +costs.downpayment
  let tyre_price = +costs.tyre_price
  let paid_yearly = +costs.paid_yearly
  let maintenance = +costs.maintenance
  let anual_income = +work.ganancias_netas.anuales
  let vehicleYearOneExpenses = (downpayment + tyre_price + paid_yearly + maintenance)
  let vehicleFollowingYearsExpenses = (tyre_price + paid_yearly + maintenance)
  let yearOneRevenue = (anual_income - vehicleYearOneExpenses )
  let yearsToFollowRevenue = (anual_income - vehicleFollowingYearsExpenses)
  //states
  const [showVehicleInfo, setShowVehicleInfo] = useState(false);
  const [showVehicleDetails, setShowVehicleDetails] = useState(false);
  const vehicleBasics = `${vehicle.model.make} ${vehicle.model.model} ${vehicle.model.submodel}`;
  //functions
  const toggleVehicleInfo = () => {
    setShowVehicleInfo(!showVehicleInfo);
  };
  const toggleVehicleDetails = () => {
    setShowVehicleDetails(!showVehicleDetails);
  };

  //render
  return (
    <div className="vehicle-wrapper">
      {/* CAR MAKE, MODEL AND SUBMODEL WITH TOGGLE BUTTON */}
      <VehicleModel
        vehicleBasics={vehicleBasics}
        onClick={toggleVehicleInfo}
        onToggle={toggleVehicleDetails}
        showVehicleDetails={showVehicleDetails}
        vehicleModel={vehicle.model}
      />
      {/* IF SHOWCARINFO = TRUE SHOW THE DETAILS */}
      {showVehicleInfo ? (
        <>
          <VehicleCosts vehicle={vehicle.costs} />
          <VehicleConsumptions vehicle={vehicle.consumptions} />
        </>
      ) : null}
      <div className="vehicle-generated_money">
        <h3>Income:</h3>
        <h4>First year:</h4>
        <p>$ {yearOneRevenue}</p>
        <h4>Following years:</h4>
        <p>$ {yearsToFollowRevenue}</p>

      </div>
    </div>
  );
};

export default Auto;
