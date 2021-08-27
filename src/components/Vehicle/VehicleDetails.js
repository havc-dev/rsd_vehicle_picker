import { useState } from "react";

import Platform from "../Platform/Platform";
import WeeklyIncome from "../Income/WeeklyIncome";
import AnualIncome from "../Income/AnualIncome";
import ToggleButton from "../Buttons/ToggleButton";
import Feature from "../Features/Feature";


const Vehicle = ({ vehicle, drivingInfo }) => {
  const [showEarninsData, setShowEarningsData] = useState(false);
  const {
    platform,
  } = drivingInfo;
  const {
    make,
    model,
    submodel,
    year,
    motor_type,
    motor_power,
    transmission,
    warranty,
    tire_type,
    price,
    downpayment,
    monthly_payment,
    extra_yearly_payments,
    insurance
  } = vehicle;
  const paid_yearly = +extra_yearly_payments + (parseFloat(monthly_payment) * 12)



  
  //functions
  const toggleEarningsData = () => {
    setShowEarningsData(!showEarninsData);
  };
  // const toggleVehicleDetails = () => {
  //   setShowVehicleDetails(!showVehicleDetails);
  // };

  //render
  return (
    <div className="vehicle-details">
      {/* CAR MAKE, MODEL AND SUBMODEL WITH TOGGLE BUTTON */}
      <div className="mb-4 border border-accent-dark rounded flex-col">
        <Feature text="Fabricante" value={make} isMoney={false} />
        <Feature text="Modelo" value={model} isMoney={false} />
        <Feature text="Submodelo" value={submodel} isMoney={false} />
        <Feature text="Año" value={year} isMoney={false} />
        <Feature text="Tipo de motor" value={motor_type} isMoney={false} />
        <Feature text="Potencia de motor" value={motor_power} isMoney={false} units="hp" />
        <Feature text="Transmisión" value={transmission} isMoney={false} />
        <Feature text="Garantía" value={warranty} isMoney={false} units="km" />
        <Feature text="Tipo de llantas" value={tire_type} isMoney={false} />
        <Feature text="Precio" value={price} isMoney={true} units=" mxn" />
        <Feature text="Seguro" value={insurance} isMoney={true} units=" mxn" />
        <Feature text="Enganche" value={downpayment} isMoney={true} units=" mxn" />
        <Feature text="Mensualidad" value={monthly_payment} isMoney={true} units=" mxn" />
        <Feature text="Anualidad" value={extra_yearly_payments} isMoney={true} units=" mxn" />
        <Feature text="Anual crédito automotriz" value={paid_yearly} isMoney={true} units=" mxn" />
      </div>
      <ToggleButton onClick={toggleEarningsData} text="Ganancias con este vehículo"/>


      {/* IF SHOWCARINFO = TRUE SHOW THE DETAILS */}
      {showEarninsData ? (

          <div>
            <h3 className="w-full text-center font-bold mb-4">Datos de la plataforma {platform}:</h3>
            <div className="w-full flex bg-gray-700 rounded mb-4 gap-2">
              <Platform drivingInfo={drivingInfo} />
            </div>
            <h3 className="w-full text-center font-bold mb-4">Balance vehículo</h3>
            <div className="w-full flex flex-col bg-gray-700 rounded mb-4 gap-2">
              <WeeklyIncome drivingInfo={drivingInfo} vehicle={vehicle} />
              <AnualIncome drivingInfo={drivingInfo} vehicle={vehicle} />
            </div>
          </div>

      ) : null}
    </div>
  );
};

export default Vehicle;
