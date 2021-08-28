import ToggleButton from './ToggleButton'


const Buttons = ({showDrivingForm, showVehicleForm, showSavedVehicles }) => {

    return (
      <section className="container shadow-md mx-auto flex flex-wrap w-full items-center">
        <ToggleButton onClick={showDrivingForm} text="My driving" />
        <ToggleButton onClick={showVehicleForm} text="New vehicle" />
        <ToggleButton onClick={showSavedVehicles} text="Vehicle list" />
      </section>
    )
}

export default Buttons
