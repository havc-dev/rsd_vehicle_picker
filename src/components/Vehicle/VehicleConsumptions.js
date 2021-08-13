import Property from "../Properties/Property";

const VehicleConsumptions = (props) => {
  const { vehicle } = props;
  return (
    <div>
      <div className="auto-info_consumptions">
        <Property
          property="brand consumption mixed"
          value={vehicle.brand_consumption_mixed}
          units="km/l"
        />
        <Property
          property="real consumption mixed"
          value={vehicle.real_consumption_mixed}
          units="km/l"
        />
        <Property
          property="brand consumption city"
          value={vehicle.brand_consumption_city}
          units="km/l"
        />
        <Property
          property="real consumption city"
          value={vehicle.real_consumption_city}
          units="km/l"
        />
        <Property
          property="brand consumption highway"
          value={vehicle.brand_consumption_highway}
          units="km/l"
        />
        <Property
          property="real consumption highway"
          value={vehicle.real_consumption_highway}
          units="km/l"
        />
      </div>
    </div>
  );
};

export default VehicleConsumptions;
