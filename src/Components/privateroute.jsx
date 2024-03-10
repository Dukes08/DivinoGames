import { Navigate } from "react-router-dom";
import {useUser} from "../contexts/UserContext"

export function PrivateRoute({ children }){
    const {user, isLoading} =useUser();

    if(isLoading){
        return <h1>LOADING</h1>;
    }

    if(!isLoading && !user){
        return <Navigate to="/login"/>;
    }

    return children;
}