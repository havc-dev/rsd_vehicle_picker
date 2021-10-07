import { useContext } from "react"

import Platform from '../components/Platform/Platform'
import AddDrivingInfo from '../components/Forms/AddDrivingInfo/AddDrivingInfo'
import AppContext from "../context/appContext"

const MyDriving = () => {
    const ctx = useContext(AppContext)
    const {drivingInfo, setEditDrivingData, editDrivingData} = ctx

    const editingHandler = () => {
        setEditDrivingData(true)
    }
    
    if (drivingInfo !== null) {
    return (
        <main className="pb-20 w-11/12 mx-auto">
            <h2>Mi manejo</h2>
            <p>Los datos iniciales son tomados de mi experiencia de Uber en Cancún <span>*Cuando no había problemas*</span></p>
            <p className="pb-5">Puedes editar los mismos, pero por favor asegurate de llenar todos los campos con valores reales</p>
            {!editDrivingData ? <Platform onClick={editingHandler}/> : <AddDrivingInfo /> }
        </main>
    )} 
    return <AddDrivingInfo />
}

export default MyDriving
