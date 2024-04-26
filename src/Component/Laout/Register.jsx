
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";

const Register = () => {

    const { crateUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = data =>{
        const {email,password} = data
        crateUser(email,password)
        .then(result =>{
            console.log(result);
        })
      };
      
    



    return (
        <div>
            <h1 className="text-center text-3xl font-bold">Please Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name"
                        name="name"
                        className="input input-bordered" 
                         {...register("name", { required: true })}
                        />
                         {errors.name && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo URL"
                        name="photo"
                        className="input input-bordered" 
                        {...register("photo")}
                        />
                        {errors.photo && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email"
                        name="email"
                        className="input input-bordered" 
                        {...register("email", { required: true })}
                        />
                          {errors.email && <span className="text-rose-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                        <input
                            // type={password ? "text" : "password"}
                            type="password"
                            placeholder="Password"
                            name="password"

                            className="input w-full input-bordered"  
                            {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                        {/* <span className="absolute top-3 right-2" onClick={() => setPassword(!password)}>

                        {
                            password ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </span> */}
                    </div>

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            {/* 
        {
            registerError && <p className="text-red-700 text-center">{registerError} </p>
        } */}
            <p className="text-center">Alrady have an Account <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>


        </div>
    );
};

export default Register;