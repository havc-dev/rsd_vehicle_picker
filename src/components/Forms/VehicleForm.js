

import VehicleInfoForm from "./vehicleInfo/VehicleInfoForm";
import formJson from "./vehicleInfo/newVehicleForm.json";

import './VehicleForm.css'

const VehicleForm = () => {

    return (
            <div className="add_car-form_wrapper">
                <VehicleInfoForm vehicleJson={formJson}/>
            </div>
    )
}

export default VehicleForm
