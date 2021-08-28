import { useState } from "react";

import WeeklyIncome from "../Income/WeeklyIncome";
import AnualIncome from "../Income/AnualIncome";
import ToggleButton from "../Buttons/ToggleButton";

const VehicleBalance = ({ drivingInfo, vehicle }) => {
  const [balanceShownAnnual, setbalanceShownAnnual] = useState(true);

  return (
    <div>
      <ToggleButton text="See yearly" onClick={() => setbalanceShownAnnual(true)} />
      <ToggleButton text="See weekly" onClick={() => setbalanceShownAnnual(false)} />
      {balanceShownAnnual ?
      <AnualIncome drivingInfo={drivingInfo} vehicle={vehicle} />
      :
      <WeeklyIncome drivingInfo={drivingInfo} vehicle={vehicle} />
        }
    </div>
  );
};

export default VehicleBalance;
