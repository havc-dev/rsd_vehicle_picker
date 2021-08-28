import Vehicle from "../Vehicle/Vehicle"

const VehiclesList = ({vehiclesList, drivingInfo}) => {
    return (
        <>
            <h2 >My vehicles</h2>
            <ul>
                {vehiclesList.vehicles.map((vehicle, index) =>
                <Vehicle key={index}
                    vehicle={vehicle}
                    drivingInfo={drivingInfo}
                  />
                )}
            </ul>
        </>
    )
}

export default VehiclesList

