import React, { useState } from 'react'
import VehicleDetails from './VehicleDetails'

import vehicle from '../../vehicle-model.json';
import work from '../../trabajo_estimado.json';

import './SavedVehiclesList.css'

const SavedVehiclesList = () => {
    const [showVehicleDetails, setShowVehicleDetails] = useState(false)
    const cardToggleHandler = () => {
        setShowVehicleDetails(!showVehicleDetails)
    }
    const vehicleBasics = `${vehicle.vehicle.model.make} ${vehicle.vehicle.model.model} ${vehicle.vehicle.model.submodel}`;

    return (
        <div className="vehicle-list">
            <h2 className="vehicle-list_title">My vehicles</h2>
            <ul className="vehicle-list_ul">
                <li className="vehicle-list_item">
                    <div className="vehicle-card-header">
                        <p className="vehicle-card_title">{vehicleBasics}</p>
                        <button className="vehicle-card_btn" onClick={cardToggleHandler}>+</button>
                    </div>
                    {showVehicleDetails? 
                    <VehicleDetails vehicle={vehicle.vehicle} work={work}/>
                    : null}
                </li>
            </ul>
        </div>
    )
}

export default SavedVehiclesList
