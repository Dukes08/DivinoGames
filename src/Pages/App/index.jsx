import {useRoutes, BrowserRouter} from 'react-router-dom'
// import Login from '../Login'
// import ClubDetails from '../ClubDetails'
// import Landing from '../Landing'
import SignUp from '../SignUp'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    // {path: '/', element: <Login />}, 
    {path: '/sign-up', element: <SignUp />},
    // {path: '/landing', element: <Landing />},
    // {path: '/club-details', element: <ClubDetails />}
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
