import { useForm } from "react-hook-form";

// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// let today = new Date();
// let maxYear = today.getFullYear();
// const schema = yup.object().shape({
//   make: yup.string().required,
//   model: yup.string().required,
//   submodel: yup.string(),
//   year: yup.number().positive().integer().min(1900).max(maxYear).required,
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

const AddVehicle = ({showAddCarForm, setShowAddCarForm}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });
  
  const onSubmit = (data) => {
    setShowAddCarForm(false)
    let retrievedVehiclesList= JSON.parse(localStorage.getItem('vehiculosLocalStorage'))
    if (retrievedVehiclesList === null ) {
      console.log( 'test is null, creando vehiclesList...' )
      let vehiclesList =  {"vehicles" : []}
      console.log('vehiclesList creado, agregando datos...')
      console.log(vehiclesList)
      vehiclesList.vehicles.push(data)
      console.log('datos actualizados, guardando...')
      localStorage.setItem("vehiculosLocalStorage", JSON.stringify(vehiclesList))      
      console.log('proceso terminado')
    } else {
      console.log('se han recuperado datos guardados')
      console.log(retrievedVehiclesList)
      console.log('procediendo a agregar el nuevo auto...')
      retrievedVehiclesList.vehicles.push(data)
      console.log('datos agregados, guardando...')
      localStorage.setItem("vehiculosLocalStorage", JSON.stringify(retrievedVehiclesList)) 
      console.log('proceso terminado con exito')
      console.log('retrievedVehiclesList')
    }
  };

  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
    {showAddCarForm ? 
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="make"
              >
                make
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle make"
                defaultValue=""
                {...register("make")}
              />
              <p>{errors.make?.message}</p>
            </div>

          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="model"
              >
                model
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle model"
                defaultValue=""
                {...register("model")}
              />
              <p>{errors.model?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="submodel"
              >
                submodel
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle submodel"
                defaultValue=""
                {...register("submodel")}
              />
              <p>{errors.submodel?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="year"
              >
                year
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle year"
                defaultValue=""
                {...register("year")}
              />
              <p>{errors.year?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="transmission"
              >
                transmission
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle transmission"
                defaultValue=""
                {...register("transmission")}
              />
              <p>{errors.transmission?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="motor_type"
              >
                motor type
              </label>
              <select
                className="text-black bg-purple-700"
                {...register("motor_type")}
              >
                <option value="combustion">combustion</option>
                <option value="turbo">turbo</option>
                <option value="mild_hybrid">mild hybrid</option>
                <option value="hybrid">hybrid</option>
                <option value="electric">electric</option>
                <option value="hydrogen">hydrogen</option>
              </select>
              <p>{errors.motor_type?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="motor_power"
              >
                motor power
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle motor power"
                defaultValue=""
                {...register("motor_power")}
              />
              <p>{errors.motor_power?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="warranty"
              >
                warranty
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle warranty"
                defaultValue=""
                {...register("warranty")}
              />
              <p>{errors.warranty?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="tire_type"
              >
                tire type
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle tire type"
                defaultValue=""
                {...register("tire_type")}
              />
              <p>{errors.tire_type?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="price"
              >
                price
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle price"
                defaultValue=""
                {...register("price")}
              />
              <p>{errors.price?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="downpayment"
              >
                downpayment
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle downpayment"
                defaultValue=""
                {...register("downpayment")}
              />
              <p>{errors.downpayment?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="monthly_payment"
              >
                monthly payment
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle monthly payment"
                defaultValue=""
                {...register("monthly_payment")}
              />
              <p>{errors.monthly_payment?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="extra_yearly_payments"
              >
                extra yearly payments
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle extra yearly payments"
                defaultValue=""
                {...register("extra_yearly_payments")}
              />
              <p>{errors.extra_yearly_payments?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="insurance"
              >
                insurance
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle insurance"
                defaultValue=""
                {...register("insurance")}
              />
              <p>{errors.insurance?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="tire_price"
              >
                tire price
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle tire price"
                defaultValue=""
                {...register("tire_price")}
              />
              <p>{errors.tire_price?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="maintenance"
              >
                maintenance
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle maintenance"
                defaultValue=""
                {...register("maintenance")}
              />
              <p>{errors.maintenance?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="make_city"
              >
                make city
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle make city"
                defaultValue=""
                {...register("make_city")}
              />
              <p>{errors.make_city?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="realistic_city"
              >
                realistic city
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle realistic city"
                defaultValue=""
                {...register("realistic_city")}
              />
              <p>{errors.realistic_city?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="make_mixed"
              >
                make mixed
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle make mixed"
                defaultValue=""
                {...register("make_mixed")}
              />
              <p>{errors.make_mixed?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="realistic_mixed"
              >
                realistic_mixed
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle realistic mixed"
                defaultValue=""
                {...register("realistic_mixed")}
              />
              <p>{errors.realistic_mixed?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="make_highway"
              >
                make highway
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle make highway"
                defaultValue=""
                {...register("make_highway")}
              />
              <p>{errors.make_highway?.message}</p>
            </div>
          </div>
          {/* field end */}

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 capitalize"
                htmlFor="realistic_highway"
              >
                realistic highway
              </label>
              <input
                className="placeholder-purple-400 bg-purple-700 capitalize"
                placeholder="vehicle realistic highway"
                defaultValue=""
                {...register("realistic_highway")}
              />
              <p>{errors.realistic_highway?.message}</p>
            </div>
          </div>
          {/* field end */}

          <input className="bg-purple-700 mt-4 px-3 py-1 w-11/12  mx-auto" type="submit" value="Guardar"/>
        </div>
      </form>
    :null}</div>
  );
};

export default AddVehicle;
