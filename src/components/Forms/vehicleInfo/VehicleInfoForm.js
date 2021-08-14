import { FormContext } from '../../../VehicleInfoFormContext';

import Element from './Element';
import './VehicleInfoForm.css';


const VehicleInfoForm = (props) => {
    const {elementsJson, handleSubmit, handleChange } = props;
    
    const {fields, form_label} = elementsJson ?? {}
    return (
        <FormContext.Provider value={{handleChange}}>
            <div className="add_car-form">
                <h3 className="add_car-form_title">{form_label}</h3>
                <form className="add_car-fields-wrapper"  onSubmit={(event) => handleSubmit}>
                    {fields?
                    fields.map((field, i)=>
                        <Element key={i} field={field} /> )
                    :null}
                    <button className="add_car-form-submit_btn" type="submit">Submit</button>
                </form>
            </div>
        </FormContext.Provider>
    )
}

export default VehicleInfoForm
