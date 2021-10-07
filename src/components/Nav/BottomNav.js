import { NavLink } from "react-router-dom";

import HomeIcon from "../Icons/HomeIcon";
import DrivingIcon from "../Icons/DrivingIcon";
import VehiclesIcon from "../Icons/VehiclesIcon";

const BottomNav = () => {
  return (
    <nav className="grid grid-cols-3 fixed bottom-0 inset-x-0 z-40">
      
        <NavLink
          activeClassName='current'
          className='nav-link'
          to='/'
          exact={true}
        >
          <HomeIcon />
          Home
        </NavLink>
        <NavLink
          activeClassName='current'
          className='nav-link'
          to='/vehicles'
          exact={true}
        >
          <VehiclesIcon />
          Mis Vehículos
        </NavLink>
        <NavLink
          activeClassName='current'
          className='nav-link'
          to='/my-driving'
          exact={true}
        >
          <DrivingIcon />
          Mi manejo
        </NavLink>
    </nav>
  );
};

export default BottomNav;
