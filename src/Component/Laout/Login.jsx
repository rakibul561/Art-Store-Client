
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "./Button";
import useAuth from "../../Hook/useAuth";
import Navbar from "../Home/Navbar";

const Login = () => {
     
     
    const { signInUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = data =>{
        const {email, password} = data

        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })
        
      };



    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-3xl font-bold">Please Login</h1>
            <form  onSubmit={handleSubmit(onSubmit)}  className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email"
                        name="email"
                        className="input input-bordered"
                        {...register("email", { required: true })}
                        />
                         {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password"
                        name="password"
                        className="input input-bordered"
                        {...register("password", { required: true })}
                        />
                         {errors.password && <span className="text-red-500">This field is required</span>}

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <Button></Button>
            <p className="text-center">Crate a new Account <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;