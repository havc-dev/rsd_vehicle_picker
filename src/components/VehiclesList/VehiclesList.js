import Vehicle from "../Vehicle/Vehicle"

const VehiclesList = ({vehiclesList, drivingInfo}) => {
    console.log(vehiclesList + drivingInfo)
    return (
        <div className="container mx-auto w-11/12">
            <h2 className="font-bold text-3xl mb-2 text-accent text-center">My vehicles</h2>
            <ul className="vehicle-list_ul">
                {/* {vehiclesList.map((vehicle, index) =>
                    <Vehicle vehicle={vehicle} key={index} work={work}/>
                )} */}
                {vehiclesList.vehicles.map((vehicle, index) =>
                <Vehicle key={index}
                    vehicle={vehicle} 
                    drivingInfo={drivingInfo}
                  />
                )}
            </ul>
        </div>
    )
}

export default VehiclesList

