import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const{user,loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center min-h-screen">
            <span style={{"--size": "12rem"}} className="loading loading-spinner text-warning"></span>
        </div>
    }
    if(user){
        return children
    }
return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;