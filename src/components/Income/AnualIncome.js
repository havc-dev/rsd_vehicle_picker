import Feature from "../Features/Feature";

const WeeklyIncome = ({ drivingInfo, vehicle }) => {
  const {
    platform_comission,
    taxes,
    fuel_price,
    trips_hour,
    hours_day,
    average_trip_distance,
    distance_between_services,
    average_ticket,
    days_per_week,
  } = drivingInfo;
  const {
    downpayment,
    insurance,
    tire_price,
    maintenance,
    realistic_mixed,
    monthly_payment,
    extra_yearly_payments,
  } = vehicle;

  //Income
  const weekly_gross_income =
    +trips_hour * +hours_day * +days_per_week * +average_ticket
  const annual_gross_income = weekly_gross_income * 52
  const platform_comission_fee =
    (annual_gross_income * platform_comission) / 100;
  const annual_taxable_income = annual_gross_income - platform_comission_fee;
  const taxes_fee = (annual_taxable_income * taxes) / 100;
  const total_trip_distance =
  parseFloat(average_trip_distance) + parseFloat(distance_between_services);
  const total_weekly_distance =
  total_trip_distance * trips_hour * hours_day * days_per_week;
  const total_annual_distance = total_weekly_distance * 52;
  //costs
  const weekly_fuel = total_weekly_distance / realistic_mixed;
  const weekly_fuel_cost = weekly_fuel * fuel_price;
  const annual_fuel_cost = weekly_fuel_cost * 52;
  const total_anual_monthly_payments = monthly_payment * 12;

  const total_anual_expenses =
    +annual_fuel_cost +
    +insurance +
    +tire_price +
    +maintenance +
    +taxes_fee +
    +platform_comission_fee +
    +downpayment +
    +total_anual_monthly_payments +
    +extra_yearly_payments;

  const balance =
    +annual_gross_income - +total_anual_expenses

  const balance_without_downpayment = +balance + +downpayment;
  const balance_text = parseFloat(
    parseFloat(+balance).toFixed(2)
  ).toLocaleString("en-US", { useGrouping: true });
  const balance_wo_downpayment_text = parseFloat(
    parseFloat(+balance_without_downpayment).toFixed(2)
  ).toLocaleString("en-US", { useGrouping: true });
  return (
    <>
      <h3 className="font-extrabold text-accent">
        Balance Anual: ${balance_text}
      </h3>
      <h3 className="font-extrabold text-accent">
        Balance Anual sin contar enganche: ${balance_wo_downpayment_text}
      </h3>
      <div>
        <Feature
          text="Ingreso bruto anual"
          value={annual_gross_income}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="Egresos anuales"
          value={total_anual_expenses}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="Comisión de plataforma anual"
          value={platform_comission_fee}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="Impuestos"
          value={taxes_fee}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="Distancia recorrida anual"
          value={total_annual_distance.toFixed(2)}
          isMoney={false}
          units="Km"
        />

        <Feature
          text="Precio de combustible"
          value={fuel_price}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="Costo de combustible anual"
          value={annual_fuel_cost}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="Costo de seguro anual"
          value={insurance}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="Costo de llantas anual"
          value={tire_price}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="Costo de mantenimiento anual"
          value={maintenance}
          isMoney={true}
          units=" mxn"
        />
      </div>
    </>
  );
};

export default WeeklyIncome;
