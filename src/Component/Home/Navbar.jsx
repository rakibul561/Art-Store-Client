import { Link, NavLink, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {


    const [userOpen, setUserOpen] = useState();
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='add'>All Art</NavLink></li>
        <li><NavLink to='/item'>Cart Item</NavLink></li>
    </>

    const handleLogOUt = async () => {
        await logOut()
        alert("LogOut Successfully")
        navigate("/login")
    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-md rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        
                        </ul>
                    </div>
                    <a className="text-3xl font-bold">Art carft</a>
                    <span><img className="w-24 bg " src="https://i.ibb.co/fGS3PGk/images.png" alt="" /></span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end  ">
                    {/* <p className="btn btn-secondary  "><Link to= '/login'>Login</Link></p> */}
                    <div className="relative md:border-l flex items-center w-full md:w-auto pl-5 ">
                        <div className=" w-[50px]"></div>

                        {user ? (
                            <button
                                onClick={() => setUserOpen(!userOpen)}
                                className="border-2 border-[#FF497C] rounded-full w-[40px]"
                            >
                                <img
                                    src={user?.photoURL}
                                    alt=""
                                    className="w-10 h-10 rounded-full"
                                />
                            </button>
                        ) : (
                            <Link
                                to={"/login"}
                                className="bg-[#FF497C] hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
                            >
                                Login
                            </Link>
                        )}

                        {/* user Menu */}
                        <div
                            className={`absolute  ${userOpen ? "block" : "hidden"
                                } flex flex-col  gap-4  shadow-lg bg-base-200 px-8 py-4 top-16 `}
                        >
                            <p className="text-sm  font-semibold">{user?.displayName}</p>
                            <p className="text-sm font-semibold">{user?.email}</p>

                            {
                                user && <button

                                    className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded cursor-pointer"
                                    onClick={handleLogOUt}
                                >
                                    logout
                                </button>
                            }

                        </div>

                    </div>

                </div>



            </div>
        </div>
    );
};

export default Navbar;