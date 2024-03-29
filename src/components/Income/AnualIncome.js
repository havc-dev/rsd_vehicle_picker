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
  // const parsedDrivingInfo = Object.keys(drivingInfo).forEach(function(el){
  //   drivingInfo[el] = parseFloat(drivingInfo[el])
  // })
  // console.log(parsedDrivingInfo)
  // const {
  //   platform_comission,
  //   taxes,
  //   fuel_price,
  //   trips_hour,
  //   hours_day,
  //   average_trip_distance,
  //   distance_between_services,
  //   average_ticket,
  //   days_per_week,
  // } = parsedDrivingInfo;

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
    annual_fuel_cost +
    insurance +
    tire_price +
    maintenance +
    taxes_fee +
    platform_comission_fee +
    downpayment +
    total_anual_monthly_payments +
    extra_yearly_payments;

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
      
      <div>
        <Feature
          text="yearly gross income"
          value={annual_gross_income}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="yearly total expenses"
          value={total_anual_expenses}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="yearly platform comission"
          value={platform_comission_fee}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="taxes"
          value={taxes_fee}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="yearly distance covered"
          value={(total_annual_distance.toFixed(2)).toLocaleString('en-US', { useGrouping: true })}
          isMoney={false}
          units="Km"
        />
        <Feature
          text="yearly fuel cost"
          value={annual_fuel_cost}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="yearly insurance cost"
          value={insurance}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="Yearly tire cost"
          value={tire_price}
          isMoney={true}
          units=" mxn"
        />
        <Feature
          text="Yearly maintenance cost"
          value={maintenance}
          isMoney={true}
          units=" mxn"
        />
        <h3 className="font-extrabold text-accent">
        <h3>Yearly balance:</h3> <h5>${balance_text}</h5>
      </h3>
      <h3 className="font-extrabold text-accent">
        <h3>Yearly balance w/o downpayment:</h3> <h5>${balance_wo_downpayment_text}</h5>
      </h3>
      </div>
    </>
  );
};

export default WeeklyIncome;
