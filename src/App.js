import { useState, useEffect } from "react";
import { FormContext } from "./VehicleInfoFormContext";

import "./App.css";

import VehicleInfoForm from "./components/Forms/vehicleInfo/VehicleInfoForm";
import SavedVehiclesList from "./components/Vehicles/SavedVehiclesList";

import formJson from "./jsons/vehicleInfo.json";

  
function App() {
  //Establish the Form and form elements
  const [elementsJson, setElementsJson] = useState(null);
  // const [vehicles, setVehicles] = useState(null);
  useEffect(() => {
    JSON.stringify(localStorage.setItem('form', formJson))
  }, [])
  useEffect(() => {
    setElementsJson(formJson[0]);
  }, []);


  let savedVehicles = JSON.parse(localStorage.getItem('vehicles'))


  //////// BUTTON TOGGLERS
  const [displayVehicles, setDisplayVehicles] = useState();
  const [showAddCarForm, setShowAddCarForm] = useState(false);
  const showSavedVehicles = () => {
    setDisplayVehicles(!displayVehicles);
  };
  const showVehicleForm = () => {
    setShowAddCarForm(!showAddCarForm);
  };
  //////// FORM HANDLERS
  const handleChange = (id, event) => {
    const newElements = { ...elementsJson };
    newElements.fields.forEach((field) => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case "checkbox":
            field["field_value"] = event.target.checked;
            break;
          default:
            field["field_value"] = event.target.value;
            break;
        }
      }
      setElementsJson(newElements);
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formJson);
    setShowAddCarForm(false);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header_title">CAR PICKER</h1>
        <h2>A tool to guide you through your next buy</h2>
      </header>

      <section className="section-btns">
        <div className="btn-group">
          <button className="btn-addNewVehicle" onClick={showVehicleForm}>
            New vehicle
          </button>
        </div>

        <div className="btn-group">
          <button
            className="btn-getExistingVehicles"
            onClick={() => savedVehicles = localStorage.getItem('vehicles')}
          >
            Get saved vehicles
          </button>

        </div>

        <div className="btn-group">
          <button className="btn-showSavedVehicles" onClick={showSavedVehicles}>
            Vehicle list
          </button>
        </div>
      </section>

      <FormContext.Provider value={{ handleChange }}>
        <section className="App-section">
          {showAddCarForm ? (
            <VehicleInfoForm
              elementsJson={elementsJson}
              setElementsJson={setElementsJson}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          ) : null}
        </section>
      </FormContext.Provider>
      <section className="App-section">
        {displayVehicles ? <SavedVehiclesList  vehicles={savedVehicles}/> : null}
      </section>
    </div>
  );
}

export default App;
