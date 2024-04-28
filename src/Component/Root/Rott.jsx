import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Fotter from "../Laout/Fotter";

const Rott = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Rott;