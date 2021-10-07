import { createContext, useContext, useEffect, useState } from "react";

import dummyDrivingData from "../jsons/trabajo_estimado.json";
import dummyVehiclesList from "../jsons/vehiclesListObject.json";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [vehiclesList, setVehiclesList] = useState(dummyDrivingData);
  const [drivingInfo, setDrivingInfo] = useState({});
  const [editDrivingData, setEditDrivingData] = useState(false)

  useEffect(() => {
    let storedDriving = localStorage.getItem("myDriving");
    if (storedDriving !== null || storedDriving !== undefined) {
      if (storedDriving) {
        setDrivingInfo(JSON.parse(storedDriving));
      } else {
        setDrivingInfo(dummyDrivingData);
      }
    }
  }, [vehiclesList]);

  useEffect(() => {
    let storedVehicles = localStorage.getItem("myVehicles");
    if (storedVehicles !== null || storedVehicles !== undefined) {
      if (storedVehicles) {
        setVehiclesList(storedVehicles);
      } else {
        setVehiclesList(dummyVehiclesList);
      }
    }
  }, [drivingInfo]);

  const appValue = {
    vehiclesList,
    drivingInfo,
    setDrivingInfo,
    editDrivingData,
    setEditDrivingData
  };
  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export { AppContext as default, AppContextProvider, useAppContext };
