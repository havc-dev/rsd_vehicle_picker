import { useState, useEffect } from 'react';
import { FormContext } from './VehicleInfoFormContext';

import Element from './Element';
import './VehicleInfoForm.css';


const VehicleInfoForm = ({vehicleJson }) => {

    const [ elements, setElements] = useState(null);
    

    useEffect(() => {
        setElements(vehicleJson[0])
    }, [vehicleJson])

    const handleChange = (id, event) => {
        const newElements = {...elements }
        newElements.fields.forEach(field => {
            const {field_type, field_id } = field;
            if (id===field_id) {
                switch (field_type) {
                    case 'checkbox':
                        field['field_value'] = event.target.checked;
                        break;
                    default:
                        field['field_value'] = event.target.value;
                        break;
                }
            }
            setElements(newElements)
        });
        console.log(elements)
        let savedVehicle=elements
        return savedVehicle
    }

    const handleSubmit = (event, savedVehicle) => {
        event.preventDefault();
        localStorage.setItem('newVehicleList', JSON.stringify(savedVehicle))
        console.log('clicked submit ')
    }

    
    const {fields, form_label} = elements ?? {}
    return (
        <FormContext.Provider value={{handleChange}}>
            <div className="add_car-form">
                <h3 className="add_car-form_title">{form_label}</h3>
                <div className="add_car-fields-wrapper">
                    {fields?
                    fields.map((field, i)=>
                        <Element key={i} field={field} /> )
                    :null}
                    <button className="add_car-form-submit_btn" type="submit" onClick={handleSubmit} >Submit</button>
                </div>
            </div>
        </FormContext.Provider>
    )
}

export default VehicleInfoForm
