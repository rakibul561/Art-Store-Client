/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivetRoute = ({children}) => {
    
    // const {loading} =
    const {user,loading} = useAuth();
    if(loading){
        return <span className=" loading loading-spinner text-primary"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;