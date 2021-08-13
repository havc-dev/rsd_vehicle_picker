import { useState } from 'react';

import VehicleInfo from "./vehicleInfo/VehicleInfo";
import formJson from "./vehicleInfo/newVehicleForm.json";

import './VehicleForm.css'

const VehicleForm = () => {
    const [myVehicles, setMyVehicles] = useState([])
    const getVehicleList = (event) => { 
        event.preventDefault()
        let parsedVehicles = JSON.parse(localStorage.getItem('vehicleList'))
        setMyVehicles( parsedVehicles )
        console.log('lista de vehiculos: ' + myVehicles)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
        localStorage.setItem('newVehicleList', JSON.stringify(myVehicles))
        console.log('clicked submit ' + myVehicles)
    }

    return (
        <div className="vehicle-form">
            <button onClick={getVehicleList}>Get saved vehicles</button>
            <VehicleInfo vehicleJson={formJson} myVehicles={myVehicles} onSubmit={handleSubmit}/>
        </div>
    )
}

export default VehicleForm
