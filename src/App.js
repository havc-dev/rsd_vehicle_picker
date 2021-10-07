import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { AppContextProvider } from "./context/appContext";

import Header from "./components/Header/Header";
import BottomNav from "./components/Nav/BottomNav";
import Home from "./pages/Home";
import MyDriving from "./pages/MyDriving";
import MyVehicles from "./pages/MyVehicles";

function App() {
  const [showAddDrivingForm, setShowAddDrivingForm] = useState(false);
  const showDrivingForm = () => {
    setShowAddDrivingForm(!showAddDrivingForm);
  };

  return (
    <AppContextProvider>
      <div className='min-h-screen w-full mx-auto bg-gray-800'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/my-driving'>
            <MyDriving
              showAddDrivingForm={showAddDrivingForm}
              setShowAddDrivingForm={setShowAddDrivingForm}
              showDrivingForm={showDrivingForm}
            />
          </Route>
          <Route exact path='/vehicles'>
            <MyVehicles />
          </Route>
        </Switch>
        <BottomNav />
      </div>
    </AppContextProvider>
  );
}

export default App;
