import Feature from "../Features/Feature";

const WeeklyIncome = ({ drivingInfo, vehicle, measurementSystem }) => {
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
    insurance,
    tire_price,
    maintenance,
    realistic_mixed,
    monthly_payment,
  } = vehicle;

  //Income
  const weekly_gross_income =
    trips_hour * hours_day * days_per_week * average_ticket;
  const platform_comission_fee =
    (weekly_gross_income * platform_comission) / 100;
  const weekly_taxable_income = weekly_gross_income - platform_comission_fee;
  const taxes_fee = (weekly_taxable_income * taxes) / 100;
  const total_trip_distance =
    parseFloat(average_trip_distance) + parseFloat(distance_between_services);
  const total_weekly_distance =
    total_trip_distance * trips_hour * hours_day * days_per_week;
  //costs
  const weekly_fuel = total_weekly_distance / realistic_mixed;
  const weekly_fuel_cost = weekly_fuel * fuel_price;
  const weekly_insurance_cost = insurance / 52;
  const weekly_tire_cost = tire_price / 52;
  const weekly_maintenance_cost = maintenance / 52;
  const weekly_costs = weekly_maintenance_cost + weekly_tire_cost + weekly_insurance_cost + weekly_fuel_cost + ((monthly_payment * 12 ) / 52)
  const balance_text = ((weekly_gross_income - weekly_costs).toFixed(2)).toLocaleString('en-US', { useGrouping: true })

  return (
    <section>
      <h3>Balance Semanal</h3>
      <div>
        <div className="income">
          <Feature
            text="Ingreso bruto semanal"
            value={weekly_gross_income}
            isMoney={true}
            units=" mxn"
          />
          <Feature
            text="Comisión de plataforma"
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
            text="Distancia recorrida semanal"
            value={total_weekly_distance.toFixed(2)}
            isMoney={false}
            units={measurementSystem}
          />
        </div>
        <div className="egresos">
          <Feature
            text="Precio de combustible"
            value={fuel_price}
            isMoney={true}
          />
          <Feature
            text="Costo de combustible semanal"
            value={weekly_fuel_cost}
            isMoney={true}
          />
          <Feature
            text="Costo de seguro semanal"
            value={weekly_insurance_cost}
            isMoney={true}
          />
          <Feature
            text="Costo de llantas semanal"
            value={weekly_tire_cost}
            isMoney={true}
          />
          <Feature
            text="Costo de mantenimiento semanal"
            value={weekly_maintenance_cost}
            isMoney={true}
          />
          <p className="font-extrabold text-accent">
            yearly balance: ${balance_text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeeklyIncome;
