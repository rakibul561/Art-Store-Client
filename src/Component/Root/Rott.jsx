import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Fotter from "../Laout/Fotter";

const Rott = () => {
    return (
        <div >
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div className="mt-8">
                <Fotter></Fotter>
            </div>
        </div>
    );
};

export default Rott;