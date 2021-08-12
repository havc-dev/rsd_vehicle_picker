import { useState, useEffect } from 'react';
import { FormContext } from './FormContext';

import Element from './Element';

import vehicleFormJson from './vehicleInfo.json'

const VehicleInfo = () => {
    const [ elements, setElements] = useState(null);
    useEffect(() => {
        setElements(vehicleFormJson[0])
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(elements)
    }
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
    }
    
    const {fields, form_label} = elements ?? {}
    return (
        <FormContext.Provider value={{handleChange}}>
        <>
            <h3>{form_label}</h3>
            <form>
                {fields?
                fields.map((field, i)=>
                    <Element key={i} field={field} /> )
                :null}
                <button className="form-submit_btn" type="submit" onClick={(e)=>handleSubmit}>Submit</button>
            </form>
        </>
        </FormContext.Provider>
    )
}

export default VehicleInfo
