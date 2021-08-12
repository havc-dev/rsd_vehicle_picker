import Property from "../Properties/Property";

const VehicleCosts = (props) => {
  // const { price, insurance, tyre_price, maintenance} = props;
  console.log(props);
  const { vehicle } = props;
  return (
    <div className="vehicle-costs">
      <Property property="price" value={vehicle.price} units="mxn" />
      <Property property="insurance" value={vehicle.insurance} units="mxn" />
      <Property
        property="maintenance"
        value={vehicle.maintenance}
        units="mxn"
      />
      <Property property="tyre price" value={vehicle.tyre_price} units="mxn/" />
    </div>
  );
};

export default VehicleCosts;
