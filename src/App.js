import "./App.css";
import UnorderedList from "./components/Lists/UnorderedList";
import Auto from "./components/Vehicles/Auto";

import test from "./vehicle-model.json";
import worktest from "./trabajo_estimado.json";
import VehicleInfo from "./components/Forms/VehicleInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CAR PICKER</h1>
      </header>
      <section>
        <VehicleInfo />
      </section>
      <section>
        <h2 className="App-title">Lista de autos:</h2>
        <UnorderedList>
          {}
          <Auto vehicle={test.vehicle} work={worktest}/>
        </UnorderedList></section>
    </div>
  );
}

export default App;
