import {useRoutes, BrowserRouter} from 'react-router-dom'
import Login from '../Login'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/', element: <Login />}, 
    
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
