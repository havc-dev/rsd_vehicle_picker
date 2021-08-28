import { useState } from "react";

import VehiclesList from "./components/VehiclesList/VehiclesList";
import Header from "./components/Header/Header";
import Buttons from "./components/Buttons/Buttons";
import AddVehicle from "./components/Forms/AddVehicle/AddVehicle";
import AddDrivingInfo from "./components/Forms/AddDrivingInfo/AddDrivingInfo";

function App() {
  const [displayVehicles, setDisplayVehicles] = useState();
  const [vehiclesList, setVehiclesList] = useState();
  const showSavedVehicles = () => {
    let savedVehiclesList = JSON.parse(localStorage.getItem("vehiculosLocalStorage"))
    setVehiclesList(savedVehiclesList)
    setDisplayVehicles(!displayVehicles);
  };

  const [showAddCarForm, setShowAddCarForm] = useState(false);
  const showVehicleForm = () => {
    setShowAddCarForm(!showAddCarForm);
  };

  const [showAddDrivingForm, setShowAddDrivingForm] = useState(false);
  const showDrivingForm = () => {
    setShowAddDrivingForm(!showAddDrivingForm);
  };
  const drivingInfo = JSON.parse(localStorage.getItem("savedDriving"))

  return (
    <>
    <div className="min-h-screen w-full mx-auto bg-gray-800">
      <Header />

      <main>
      <Buttons showDrivingForm={showDrivingForm} showVehicleForm={showVehicleForm} showSavedVehicles={showSavedVehicles}/>

      {showAddDrivingForm ?
      <AddDrivingInfo showAddDrivingForm={showAddDrivingForm} setShowAddDrivingForm={setShowAddDrivingForm}/>
      :null}
      {showAddCarForm ?
      <AddVehicle showAddCarForm={showAddCarForm} setShowAddCarForm={setShowAddCarForm}/>
      :null}
      <section className="w-11/12 mx-auto flex flex-col rounded my-5">
        {displayVehicles && vehiclesList != null ?  <VehiclesList vehiclesList={vehiclesList} drivingInfo={drivingInfo} /> : null}
      </section>
      </main>
    </div>
    </>
  );
}

export default App;
