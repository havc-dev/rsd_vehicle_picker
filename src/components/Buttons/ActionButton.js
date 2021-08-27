const ActionButton = ({onClick, text}) => {
    return (
            <button
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-transparent hover:bg-black-lightest text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
            // onClick={() =>
            //   (savedVehicles = localStorage.getItem("vehiclesList"))
            // }
            onClick={onClick}
          >
            {text}
          </button>
    )
}

export default ActionButton
