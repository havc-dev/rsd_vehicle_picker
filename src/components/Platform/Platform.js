import { useContext } from "react";
import AppContext from "../../context/appContext";
import Feature from "../Features/Feature";

const Platform = ({onClick}) => {
  const ctx = useContext(AppContext)
  const {drivingInfo} = ctx
  
    const {
        platform_comission,
        taxes,
        fuel_price,
        trips_hour,
        hours_day,
        average_trip_distance,
        distance_between_services,
        average_ticket,
        days_per_week
    } = drivingInfo

  return (
    <div className="w-full">
      <Feature text="Comisión de plataforma" value={platform_comission} isMoney={false} units="%"/>
      <Feature text="Impuestos" value={taxes} isMoney={false} units="%"/>
      <Feature text="Precio Combustible" value={fuel_price} isMoney={true} units=" mxn"/>
      <Feature text="Viajes por hora" value={trips_hour} isMoney={false} units=" viajes"/>
      <Feature text="Horas al día" value={hours_day} isMoney={false} units="hrs"/>
      <Feature text="Dias trabajados por semana" value={days_per_week} isMoney={false} units=" dias"/>
      <Feature text="Distancia viaje promedio" value={average_trip_distance} isMoney={false} units="Km"/>
      <Feature text="Distancia entre servicios" value={distance_between_services} isMoney={false} units="Km"/>
      <Feature text="Ticket promedio" value={average_ticket} isMoney={true} units=" mxn"/>
      <button className="my-10" onClick={onClick}>Edit</button>
    </div>
  );
};

export default Platform;
