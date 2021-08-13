import { useState, useEffect } from 'react';
import { FormContext } from './VehicleInfoFormContext';

import Element from './Element';

const VehicleInfo = ({vehicleJson, myVehicles, onSubmit}) => {

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
        myVehicles.push(myVehicles)
    }
    
    const {fields, form_label} = elements ?? {}
    return (
        <FormContext.Provider value={{handleChange}}>
            <div className="add_car-form">
                <h3 className="form-title">{form_label}</h3>
                <div>
                    {fields?
                    fields.map((field, i)=>
                        <Element key={i} field={field} /> )
                    :null}
                    <button className="form-submit_btn" type="submit" onClick={onSubmit} >Submit</button>
                </div>
            </div>
        </FormContext.Provider>
    )
}

export default VehicleInfo
