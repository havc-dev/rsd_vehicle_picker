import "./Property.css";

const Property = (props) => {
  return (
    <div className="car-properties">
      <h3 className="car-property__header">{props.property}: </h3>
      <h4 className="car-property__value">
        {props.value} {props.units ? props.units : null}
      </h4>
    </div>
  );
};

export default Property;
