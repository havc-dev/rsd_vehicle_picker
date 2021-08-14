import { useState, useEffect } from 'react';
import { FormContext } from './VehicleInfoFormContext';
import Vehicle from "./components/Vehicles/Vehicle";

import "./App.css";
import vehicle from './vehicle-model.json';
import work from './trabajo_estimado.json';
import VehicleInfoJason from "./components/Forms/vehicleInfo/vehicleInfo.json";
import VehicleInfoForm from './components/Forms/vehicleInfo/VehicleInfoForm';


function App() {
  ////////
  const [displayedVehicles, setDisplayedVehicles] = useState();
  const [addCar, setAddCar] = useState(false);
  const [existingVehicles, setExistingVehicles] = useState([])
  ////////
  const [ elementsJson, setElementsJson] = useState(null);
  ////////
  const showSavedVehicles =() => {
    setDisplayedVehicles(!displayedVehicles)
    // getVehicleList()
  }
  ////////
  const showVehicleForm = () => {
    setAddCar(!addCar)
  }
  ////////
  const getExistingVehicles = () => {
    console.log('getting existing vehicles')
    let strigedExistingVehicles = localStorage.getItem('vehicleList')
    setExistingVehicles(JSON.parse(strigedExistingVehicles))
    console.log(existingVehicles)
  };
  ////////
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit clicked")
    setAddCar(false)
}

  ///
  useEffect(() => {
    setElementsJson(VehicleInfoJason[0])
  }, [])
  const handleChange = (id, event) => {
    const newElements = {...elementsJson }
    newElements.fields.forEach(field => {
      const {field_type, field_id } = field;
      if (id===field_id) {
          switch (field_type) {
            case 'checkbox':
              field['field_value'] = event.target.checked;
              break;
            default:
              field['field_value'] = event.target.value;
              break;
          }
      }
      setElementsJson(newElements)
    });
  }
  return (
    <FormContext.Provider value={{handleChange}}>
    <div className="App">
      <header className="App-header">
        <h1 className="App-header_title">CAR PICKER</h1>
        <h2>A tool to guide you through your next buy</h2>
      </header>

      <section className="section-btns">
        <div className="btn-group">
          <p>Already have saved some vehicles?</p>
          <button className="btn-getExistingVehicles" onClick={getExistingVehicles}>
            Get them
          </button>
        </div>
        <div className="btn-group">
          <p>Want to see your saved vehicles?</p>
          <button className="btn-showSavedVehicles" onClick={showSavedVehicles}>
            Show
          </button>
        </div>
        <div className="btn-group">
          <p>Want add a new vehicle?</p>
          <button className="btn-addNewVehicle" onClick={showVehicleForm}>
            New vehicle
          </button>
        </div>
      </section>

      <section className="App-section">
        {addCar?
          <VehicleInfoForm
          elementsJson={elementsJson}
          setElementsJson={setElementsJson}
          handleSubmit={handleSubmit}
          handleChange={handleChange} />
        : null}
      </section>
      <section className="App-section">
        {displayedVehicles?
          <Vehicle vehicle={vehicle.vehicle} work={work}/>
        :null}
      </section>
    </div>
    </FormContext.Provider>
  );
}

export default App;
