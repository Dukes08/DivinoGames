import React from 'react'
import { NavLink } from 'react-router-dom'
// import {userUser} from "../../contexts/UserContext"
// import {logout} from "../../firebase/auth"

function Navbar() {
    // const {user} = useUser();
    const activeStyle = 'underline underline-offset-4'
    // const handleLogout = async => {
    //    await logout()
    // }

    return (
        <nav className="flex items-center pt-8 pb-8 border-b  w-full z-10 top-0 px-8 py-5">
            <ul className='flex justify-center items-center w-full gap-72'>
                <li className='font-semibold text-lg'>

                    <NavLink 
                    to='/landing' 
                    className={({isActive})=> isActive ? activeStyle: undefined}>
                        DivinoGames
                    </NavLink>
                </li>
                <li className='font-semibold text-lg'>
                    <NavLink 
                    to='/buscador' 
                    className={({isActive})=> isActive ? activeStyle: undefined}>
                        Buscador
                    </NavLink>
                </li>
                <li className='text-lg font-semibold'>
                    <NavLink 
                    to='/usuario-profile' 
                    className={({isActive})=> isActive ? activeStyle: undefined}>
                        Usuario
                         {/* {user.name} */}
                    </NavLink>
                </li>

                <li className='text-lg font-semibold'>
                    <button 
                    // onClick={handleLogout}
                    >
                        <NavLink>
                            LogOut
                        </NavLink>
                    </button>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;
