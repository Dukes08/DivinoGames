import {useRoutes, BrowserRouter} from 'react-router-dom'
import Login from '../Login'
import ClubDetails from '../ClubDetails'
import  Landing  from '../Landing'
import SearchPage from '../SearchPage'
import SignUp from '../SignUp'
import Profile from '../Profile'
import './App.css'
import { UserContextProvider } from '../../contexts/UserContext'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/', element: <Login />}, 
    {path: '/sign-up', element: <SignUp />},
    {path: '/landing', element: <Landing />},
    {path: '/club/:id', element: <ClubDetails />},
    {path: '/profile', element: <Profile />},
    {path: '/buscador', element: <SearchPage />}

  ])

  return routes;
}

const App = () =>{
  

  return (
    <UserContextProvider>
      <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </UserContextProvider>
    
  )
}

export default App


