import { useState } from "react";
import VehicleForm from "./components/Forms/VehicleForm";
import Auto from "./components/Vehicles/Auto";

import "./App.css";
import vehicle from './vehicle-model.json';
import work from './trabajo_estimado.json';


function App() {
  const [savedVehicles, setSavedVehicles] = useState();
  const [displayedVehicles, setDisplayedVehicles] = useState();
  const [addCar, setAddCar] = useState(false);
  
  const showSavedVehicles =(event) => {
    event.preventDefault();
    getVehicleList()
    setDisplayedVehicles(!displayedVehicles)
  }
  const showVehicleForm = () => {
    setAddCar(!addCar)
  }
  const getVehicleList = () => {
    let parsedVehicles = JSON.parse(localStorage.getItem("vehicleList"));
    setSavedVehicles(parsedVehicles);
    console.log("lista de vehiculos: " + savedVehicles);
  };
  // savedVehicles=  {savedVehicles}
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header_title">CAR PICKER</h1>
        <h2>A tool to guide you through your next buy</h2>
      </header>
      <div className="show_add-btns">
        <button className="btn-getSavedVehicles" onClick={showSavedVehicles}>
          Show saved vehicles
        </button>
        <button className="btn-addNewVehicle" onClick={showVehicleForm}>
          Add new vehicle
        </button>
      </div>
      <section className="App-section">
        {addCar?
          <VehicleForm />
        :null}
      </section>
      <section className="App-section">
        {displayedVehicles?
          <Auto vehicle={vehicle.vehicle} work={work}/>
        :null}
      </section>
    </div>
  );
}

export default App;
