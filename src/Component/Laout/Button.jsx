import { useState } from "react";
import useAuth from "../../Hook/useAuth";

const Button = () => {
        
        const {googleLogin,githubLogin} = useAuth();
    return (
             <div className="flex justify-evenly">
                    <button 
                    onClick={()=>googleLogin()}
                    
                    >
                    <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-primary  border-2 border-black group-hover:bg-green-600"></span>
                        <span className="relative text-black group-hover:text-white">Google</span>
                    </a>
                    </button>

                    <button
                    
                    onClick={()=>githubLogin()}
                    
                    >
                    <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-secondary "></span>
                        <span className="relative text-black group-hover:text-white">Github</span>
                    </a>
                    </button>
                </div>
    
    );
};

export default Button;