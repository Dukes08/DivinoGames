import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from "../../contexts/UserContext"
import { logout } from "../../firebase/auth"
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();
    
    const { user, isLoadingUser } = useUserContext(); 

    const activeStyle = 'underline underline-offset-4';

    const handleLogout = async () => {
        await logout(() => navigate("/"));
      };
    

    if (isLoadingUser) {
        return <div>Cargando...</div>;
    }

    return (
        <nav className="flex items-center pt-8 pb-8 border-b w-full z-10 top-0 px-8 py-5">
            <ul className='flex justify-center items-center w-full gap-72'>
                <li className='font-semibold text-lg'>
                    <NavLink 
                        to='/landing' 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        DivinoGames
                    </NavLink>
                </li>

                <li className='font-semibold text-lg'>
                    <NavLink 
                        to='/buscador' 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Buscador
                    </NavLink>
                </li>

                <li className='text-lg font-semibold'>
                    <NavLink 
                        to='/profile' 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        {user.name}
                    </NavLink>
                </li>

                <li className='text-lg font-semibold'>
                    <button onClick={handleLogout}>
                        LogOut
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;


// {!isLoadingUser && (
//     <ul className={styles.menuList}>
//       {!!user ? (
//         <>
//           <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
//             <Link to={PROFILE_URL} className={styles.link}>
//               <div className={styles.userAvatar} />
//               <span>{user.name}</span>
//             </Link>
//           </li>
//           <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
//             <button
//               type="button"
//               className={`${styles.link} ${styles.logoutBtn}`}
//               onClick={handleLogout}
//             >
//               <span>Salir</span>
//             </button>
//           </li>
//         </>
//       ) : (
//         <>
//           <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
//             <Link to={LOGIN_URL} className={styles.link}>
//               <span>Iniciar sesión</span>
//             </Link>
//           </li>
//           <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
//             <Link to={REGISTER_URL} className={styles.link}>
//               <span>Registro</span>
//             </Link>
//           </li>
//         </>
//       )}
//     </ul>
//   )}
    