import vehicleInfo from './src/components/Forms/vehicleInfo/vehicleInfo.json'

let vehiculoParaAgregar = (json) => {
    if (json.length > 1) {
        console.log('length mayor que 1')
    } else {
        console.log('lenght = 0')
    }
}

vehiculoParaAgregar(vehicleInfo)