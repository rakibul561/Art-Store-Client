import { Navigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivetRoute = ({children}) => {
    const {user} = useAuth();
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;