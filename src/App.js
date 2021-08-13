import VehicleForm from "./components/Forms/VehicleForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header_title">CAR PICKER</h1>
        <h2>A tool to guide you through your next buy</h2>
      </header>
      <section className="App-section">
        <VehicleForm />
      </section>
    </div>
  );
}

export default App;
