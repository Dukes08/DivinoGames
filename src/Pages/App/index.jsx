import {useRoutes, BrowserRouter} from 'react-router-dom'
import Login from '../Login'
import ClubDetails from '../ClubDetails'
import  Landing  from '../Landing'
import SignUp from '../SignUp'
import Profile from '../Profile'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/', element: <Login />}, 
    {path: '/sign-up', element: <SignUp />},
    {path: '/landing', element: <Landing />},
    {path: '/club-details', element: <ClubDetails />},
    {path: '/profile', element: <Profile />}

  ])

  return routes;
}

const App = () =>{
  

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
