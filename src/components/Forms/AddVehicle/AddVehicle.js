import { useForm } from "react-hook-form";
import SubmitButton from "../../Buttons/SubmitButton";

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

const AddVehicle = ({ showAddCarForm, setShowAddCarForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setShowAddCarForm(false);
    let retrievedVehiclesList = JSON.parse(
      localStorage.getItem("vehiculosLocalStorage")
    );
    if (retrievedVehiclesList === null) {
      console.log("test is null, creando vehiclesList...");
      let vehiclesList = { vehicles: [] };
      console.log("vehiclesList creado, agregando datos...");
      console.log(vehiclesList);
      vehiclesList.vehicles.push(data);
      console.log("datos actualizados, guardando...");
      localStorage.setItem(
        "vehiculosLocalStorage",
        JSON.stringify(vehiclesList)
      );
      console.log("proceso terminado");
    } else {
      console.log("se han recuperado datos guardados");
      console.log(retrievedVehiclesList);
      console.log("procediendo a agregar el nuevo auto...");
      retrievedVehiclesList.vehicles.push(data);
      console.log("datos agregados, guardando...");
      localStorage.setItem(
        "vehiculosLocalStorage",
        JSON.stringify(retrievedVehiclesList)
      );
      console.log("proceso terminado con exito");
      console.log("retrievedVehiclesList");
    }
  };

  return (
    <>
      {showAddCarForm ? (
        <section>
          <h2>Add a new vehicle</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Vehicle</legend>
              <div className="input_label-group">
                <label htmlFor="make">make</label>
                <input
                  placeholder="vehicle make"
                  defaultValue=""
                  {...register("make")}
                />
                <p>{errors.make?.message}</p>
              </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="model">model</label>
                  <input
                    placeholder="vehicle model"
                    defaultValue=""
                    {...register("model")}
                  />
                  <p>{errors.model?.message}</p>
                </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="submodel">submodel</label>
                  <input
                    placeholder="vehicle submodel"
                    defaultValue=""
                    {...register("submodel")}
                  />
                  <p>{errors.submodel?.message}</p>
                </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="year">year</label>
                  <input
                    placeholder="vehicle year"
                    defaultValue=""
                    {...register("year")}
                  />
                  <p>{errors.year?.message}</p>
                </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="transmission">transmission</label>
                  <input
                    placeholder="vehicle transmission"
                    defaultValue=""
                    {...register("transmission")}
                  />
                  <p>{errors.transmission?.message}</p>
                </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="motor_type">motor type</label>
                  <select {...register("motor_type")}>
                    <option value="combustion">combustion</option>
                    <option value="turbo">turbo</option>
                    <option value="mild_hybrid">mild hybrid</option>
                    <option value="hybrid">hybrid</option>
                    <option value="electric">electric</option>
                    <option value="hydrogen">hydrogen</option>
                  </select>
                  <p>{errors.motor_type?.message}</p>
                </div>
              {/* field end */}

            </fieldset>
            
            <fieldset>
            <legend>Vehicle Details</legend>
            <div className="input_label-group">
                  <label htmlFor="motor_power">motor power</label>
                  <input
                    placeholder="vehicle motor power"
                    defaultValue=""
                    {...register("motor_power")}
                  />
                  <p>{errors.motor_power?.message}</p>
                </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="warranty">warranty</label>
                  <input
                    placeholder="vehicle warranty"
                    defaultValue=""
                    {...register("warranty")}
                  />
                  <p>{errors.warranty?.message}</p>
              </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="tire_type">tire type</label>
                  <input
                    placeholder="vehicle tire type"
                    defaultValue=""
                    {...register("tire_type")}
                  />
                  <p>{errors.tire_type?.message}</p>
              </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="price">price</label>
                  <input
                    placeholder="vehicle price"
                    defaultValue=""
                    {...register("price")}
                  />
                  <p>{errors.price?.message}</p>
              </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="downpayment">downpayment</label>
                  <input
                    placeholder="vehicle downpayment"
                    defaultValue=""
                    {...register("downpayment")}
                  />
                  <p>{errors.downpayment?.message}</p>
              </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="monthly_payment">monthly payment</label>
                  <input
                    placeholder="vehicle monthly payment"
                    defaultValue=""
                    {...register("monthly_payment")}
                  />
                  <p>{errors.monthly_payment?.message}</p>
                </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="extra_yearly_payments">
                    extra yearly payments
                  </label>
                  <input
                    placeholder="vehicle extra yearly payments"
                    defaultValue=""
                    {...register("extra_yearly_payments")}
                  />
                  <p>{errors.extra_yearly_payments?.message}</p>
              </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="insurance">insurance</label>
                  <input
                    placeholder="vehicle insurance"
                    defaultValue=""
                    {...register("insurance")}
                  />
                  <p>{errors.insurance?.message}</p>
              </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="tire_price">tire price</label>
                  <input
                    placeholder="vehicle tire price"
                    defaultValue=""
                    {...register("tire_price")}
                  />
                  <p>{errors.tire_price?.message}</p>
              </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="maintenance">maintenance</label>
                  <input
                    placeholder="vehicle maintenance"
                    defaultValue=""
                    {...register("maintenance")}
                  />
                  <p>{errors.maintenance?.message}</p>
              </div>
              {/* field end */}
              </fieldset>

              <fieldset>
              <legend>Fuel consumption</legend>
              <div className="input_label-group">
                  <label htmlFor="make_city">make city</label>
                  <input
                    placeholder="vehicle make city"
                    defaultValue=""
                    {...register("make_city")}
                  />
                  <p>{errors.make_city?.message}</p>
              </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="realistic_city">realistic city</label>
                  <input
                    placeholder="vehicle realistic city"
                    defaultValue=""
                    {...register("realistic_city")}
                  />
                  <p>{errors.realistic_city?.message}</p>
              </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="make_mixed">make mixed</label>
                  <input
                    placeholder="vehicle make mixed"
                    defaultValue=""
                    {...register("make_mixed")}
                  />
                  <p>{errors.make_mixed?.message}</p>
              </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="realistic_mixed">realistic_mixed</label>
                  <input
                    placeholder="vehicle realistic mixed"
                    defaultValue=""
                    {...register("realistic_mixed")}
                  />
                  <p>{errors.realistic_mixed?.message}</p>
                </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="make_highway">make highway</label>
                  <input
                    placeholder="vehicle make highway"
                    defaultValue=""
                    {...register("make_highway")}
                  />
                  <p>{errors.make_highway?.message}</p>
              </div>
              {/* field end */}

              <div className="input_label-group">
                  <label htmlFor="realistic_highway">realistic highway</label>
                  <input
                    placeholder="vehicle realistic highway"
                    defaultValue=""
                    {...register("realistic_highway")}
                  />
                  <p>{errors.realistic_highway?.message}</p>
              </div>
              {/* field end */}
              </fieldset>
              <SubmitButton value="save" />
          </form>
        </section>
      ) : null}
    </>
  );
};

export default AddVehicle;
