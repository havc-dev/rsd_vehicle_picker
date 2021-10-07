import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import AppContext from "../../../context/appContext";
import SubmitButton from "../../Buttons/SubmitButton";

const AddDrivingInfo = () => {
  const [loading, setLoading] = useState(false)
  const ctx = useContext(AppContext)
  const {setEditDrivingData, editDrivingData, drivingInfo, } = ctx
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true)
    localStorage.setItem("myDriving", JSON.stringify(data));

    setEditDrivingData(!editDrivingData);
    setLoading(false)
    history.push("/vehicles")
  };

  return (
    <section className="pb-20">
      <h2>Mi manejo</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Plataforma</legend>
          <div className="input_label-group">
            <label htmlFor="platform">plataforma:</label>
            <input
              placeholder="Ejemplo: Uber"
              defaultValue={drivingInfo.platform}
              {...register("platform")}
            />
            <p>{errors.platform?.message}</p>
          </div>
          {/* field end */}

          <div className="input_label-group">
            <label htmlFor="platform_comission">Comisión de la plataforma:</label>
            <input
              placeholder="Ejemplo: 25"
              defaultValue={drivingInfo.platform_comission}
              {...register("platform_comission")}
            />
            <p>{errors.platform_comission?.message}</p>
          </div>
          {/* field end */}
        </fieldset>

        <fieldset>
          <legend>Ubicación:</legend>
          <div className="input_label-group">
            <label htmlFor="taxes">% de impuestos:</label>
            <input
              placeholder="Ejemplo: 15"
              defaultValue={drivingInfo.taxes}
              {...register("taxes")}
            />
            <p>{errors.taxes?.message}</p>
          </div>
          {/* field end */}

          <div className="input_label-group">
            <label htmlFor="fuel_price">precio de Combustible:</label>
            <input
              placeholder="Ejemplo: 22.5"
              defaultValue={drivingInfo.fuel_price}
              {...register("fuel_price")}
            />
            <p>{errors.fuel_price?.message}</p>
          </div>
          {/* field end */}
        </fieldset>

        <fieldset>
          <legend>Cómo trabajo:</legend>
          <div className="input_label-group">
            <label className="form-label" htmlFor="trips_hour">
              viajes por hora:
            </label>
            <input
              className="placeholder-purple-400 bg-purple-700 capitalize"
              placeholder="Ejemplo: 5.7"
              defaultValue={drivingInfo.trips_hour}
              {...register("trips_hour")}
            />
            <p>{errors.trips_hour?.message}</p>
          </div>
          {/* field end */}

          <div className="input_label-group">
            <label htmlFor="hours_day">horas al dia:</label>
            <input
              placeholder="Ejemplo: 8.5"
              defaultValue={drivingInfo.hours_day}
              {...register("hours_day")}
            />
            <p>{errors.hours_day?.message}</p>
          </div>
          {/* field end */}

          <div className="input_label-group">
            <label htmlFor="average_trip_distance">Distancia promedio viaje</label>
            <input
              placeholder="Ejemplo: 8.5"
              defaultValue={drivingInfo.average_trip_distance}
              {...register("average_trip_distance")}
            />
            <p>{errors.average_trip_distance?.message}</p>
          </div>
          {/* field end */}

          <div className="input_label-group">
            <label htmlFor="distance_between_services">
              distancia entre viajes:
            </label>
            <input
              placeholder="Ejemplo: 1.9"
              defaultValue={drivingInfo.distance_between_services}
              {...register("distance_between_services")}
            />
            <p>{errors.distance_between_services?.message}</p>
          </div>
          {/* field end */}

          <div className="input_label-group">
            <label htmlFor="average_ticket">Ticket Promedio:</label>
            <input
              placeholder="Ejemplo: 100"
              defaultValue={drivingInfo.average_ticket}
              {...register("average_ticket")}
            />
            <p>{errors.average_ticket?.message}</p>
          </div>
          {/* field end */}

          <div className="input_label-group">
            <label htmlFor="days_per_week">Dias trabajados por semana</label>
            <input
              placeholder="Ejemplo: 6.5"
              defaultValue={drivingInfo.days_per_week}
              {...register("days_per_week")}
            />
            <p>{errors.days_per_week?.message}</p>
          </div>
          {/* field end */}
        </fieldset>
        {loading && <p>Cargando...</p>}
        <SubmitButton value="Guardar" />
      </form>
    </section>
  );
};

export default AddDrivingInfo;
