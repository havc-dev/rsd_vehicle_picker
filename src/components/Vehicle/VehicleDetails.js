import Feature from "../Features/Feature";


const Vehicle = ({ vehicle,  }) => {

  const {
    make,
    model,
    submodel,
    year,
    motor_type,
    motor_power,
    transmission,
    warranty,
    tire_type,
    price,
    downpayment,
    monthly_payment,
    extra_yearly_payments,
    insurance
  } = vehicle;
  const paid_yearly = +extra_yearly_payments + (parseFloat(monthly_payment) * 12)

  return (
    <div className="w-11/12 mx-auto">
      {/* CAR MAKE, MODEL AND SUBMODEL WITH TOGGLE BUTTON */}
      <div className="mb-4 border border-gray-600 rounded  flex flex-col">
        <Feature text="Fabricante" value={make} isMoney={false} />
        <Feature text="Modelo" value={model} isMoney={false} />
        <Feature text="Submodelo" value={submodel} isMoney={false} />
        <Feature text="Año" value={year} isMoney={false} />
        <Feature text="Tipo de motor" value={motor_type} isMoney={false} />
        <Feature text="Potencia de motor" value={motor_power} isMoney={false} units="hp" />
        <Feature text="Transmisión" value={transmission} isMoney={false} />
        <Feature text="Garantía" value={warranty} isMoney={false} units="km" />
        <Feature text="Tipo de llantas" value={tire_type} isMoney={false} />
        <Feature text="Precio" value={price} isMoney={true} units=" mxn" />
        <Feature text="Seguro" value={insurance} isMoney={true} units=" mxn" />
        <Feature text="Enganche" value={downpayment} isMoney={true} units=" mxn" />
        <Feature text="Mensualidad" value={monthly_payment} isMoney={true} units=" mxn" />
        <Feature text="Anualidad" value={extra_yearly_payments} isMoney={true} units=" mxn" />
        <Feature text="Anual crédito automotriz" value={paid_yearly} isMoney={true} units=" mxn" />
      </div>
    </div>
  );
};

export default Vehicle;
