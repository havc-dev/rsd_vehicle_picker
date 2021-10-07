import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="w-full mb-5 bg-gray-900 overflow-hidden border-gray-500 shadow-xl">
        <NavLink to="/">
          <h1 className="font-bold text-3xl mb-5 pt-5 pb-5 text-accent text-center fixed top-0 inset-x-0 bg-gray-900 shadow">RSD VEHICLE PICKER</h1></NavLink>
          <h2 className=" w-11/12 mx-auto font-semibold text-xl text-center pt-16 text-gray-200">Una herramienta para ayudarte con tu próxima inversión</h2>
        </header>
    )
}

export default Header
