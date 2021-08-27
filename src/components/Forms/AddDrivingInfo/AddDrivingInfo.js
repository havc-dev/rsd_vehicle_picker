import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   make: yup.string().required,
//   model: yup.string().required,
//   submodel: yup.string(),
//   year: yup.number().positive().integer().min(1900).max(2100).required,
//   transmission: yup.string().required,
//   motor_type: yup.string().required,
//   motor_power: yup.number().positive().min(10).max(2000),
//   warranty: yup.string().required,
//   tire_type: yup.string(),
//   price: yup.number().positive().min(1000).required,
//   downpayment: yup.number().positive().min(1000).required,
//   monthly_payment: yup.number().positive().min(100).required,
//   extra_payments_total: yup.number().positive().min(1000).required,
//   paid_yearly: yup.number().positive().min(1000).required,
//   insurance: yup.number().positive().min(100).required,
//   tire_price: yup.number().positive().min(50).required,
//   maintenance: yup.number().positive().min(50).required,
//   make_city: yup.number().positive().min(1).max(100).required,
//   realistic_city: yup.number().positive().min(1).max(100).required,
//   make_mixed: yup.number().positive().min(1).max(100).required,
//   realistic_mixed: yup.number().positive().min(1).max(100).required,
//   make_highway: yup.number().positive().min(1).max(100).required,
//   realistic_highway: yup.number().positive().min(1).max(100).required,
// });

const AddDrivingInfo = ({setShowAddDrivingForm, showAddDrivingForm}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    localStorage.setItem("savedDriving", JSON.stringify(data))
    setShowAddDrivingForm(!showAddDrivingForm)
  };

  return (
    <div className="mt-5 md:mt-0 md:col-span-2 flex flex-col flex-wrap">
      <h2>Your driving info</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
      <legend>Platform</legend>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="platform"
              >
                platform
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="platform you are afilliated"
                defaultValue=""
                {...register("platform")}
              />
              <p>{errors.platform?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="platform_comission"
              >
                platform comission
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle platform comission"
                defaultValue=""
                {...register("platform_comission")}
              />
              <p>{errors.platform_comission?.message}</p>
            </div>
          </div>
          {/* field end */}
        </div>
        </fieldset>
        <fieldset>
          <legend>Location</legend>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="taxes"
              >
                taxes
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="taxes percentage"
                defaultValue=""
                {...register("taxes")}
              />
              <p>{errors.taxes?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="fuel_price"
              >
                fuel_price
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="fuel_price"
                defaultValue=""
                {...register("fuel_price")}
              />
              <p>{errors.fuel_price?.message}</p>
            </div>
          </div>
          {/* field end */}
        </fieldset>
        <fieldset>
        <legend>How I work</legend>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="trips_hour"
              >
                trips per hour
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="trips per hour"
                defaultValue=""
                {...register("trips_hour")}
              />
              <p>{errors.trips_hour?.message}</p>
            </div>
          </div>
          {/* field end */}


          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="hours_day"
              >
                hours a day
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="hours a day working"
                defaultValue=""
                {...register("hours_day")}
              />
              <p>{errors.hours_day?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="average_trip_distance"
              >
                average trip distance
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="average trip distance"
                defaultValue=""
                {...register("average_trip_distance")}
              />
              <p>{errors.average_trip_distance?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="distance_between_services"
              >
                distance between services
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="distance between services"
                defaultValue=""
                {...register("distance_between_services")}
              />
              <p>{errors.distance_between_services?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="average_ticket"
              >
                average ticket
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="average ticket"
                defaultValue=""
                {...register("average_ticket")}
              />
              <p>{errors.average_ticket?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="days_per_week"
              >
               days working per week
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="days working per week"
                defaultValue=""
                {...register("days_per_week")}
              />
              <p>{errors.days_per_week?.message}</p>
            </div>
          </div>
          {/* field end */}

          <input className="bg-purple-700 mt-4 px-3 py-1 w-11/12  mx-auto" type="submit" value="Guardar"/>
          </fieldset>
      </form>
    </div>
  );
};

export default AddDrivingInfo;
