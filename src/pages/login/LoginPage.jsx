import { Key, Mail } from "react-feather";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/useLogin";
import { useUserDetails } from "../../hooks/useUserDetails";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from 'react-hot-toast';
import Bglogin from "../../assets/Img/bg-login.jpg";
import "../style.css";

export const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, isLoading } = useLogin();
  const { isLogged } = useUserDetails();
  const navigate = useNavigate()


  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    await login(email, password);
  });

  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged, navigate]);

  return (
    <>
      {!isLogged ? (
        <div className="bg-white flex justify-center items-center h-screen">
          {/* Left: Image */}
          <div className="w-1/2 h-screen hidden lg:block relative">
            <img
              src={Bglogin}
              alt="Placeholder Image"
              className="brightness-50 object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
              <h2 className="text-4xl text-white font-semibold">Welcome Back!</h2>
              <p className="text-lg text-white">Please sign in to continue</p>
            </div>
          </div>
          <div className="flex md:w-1/2 justify-center md:py-10 items-center bg-white">
            <div>
              <form onSubmit={onSubmit} autoComplete="off" noValidate>
                <h1 className="text-gray-800 font-bold text-2xl mb-1">Sign-in </h1>
                <p className="text-sm font-normal text-gray-600 mb-7">
                  Please fill out the form below to sign in
                </p>

                {/* Input: Email */}
                <div className="mb-2">
                  <div className="flex items-center border-2 py-2 px-3 rounded-xl">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      className="pl-2 outline-none border-none"
                      placeholder="Email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                  </div>
                  {/* Placeholder for error message */}
                  {errors.email && (
                    <span className="text-red-500 ml-8">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                {/* Input: Password */}
                <div className="mb-2 ">
                  <div className="flex items-center border-2 py-2 px-3 rounded-xl">
                    <Key className="h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      className="pl-2 outline-none border-none"
                      placeholder="Password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "The password is required",
                        },
                      })}
                    />
                  </div>
                  {/* Placeholder for error message */}
                  {errors.password && (
                    <span className="text-red-500 ml-8">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                {/* Forgot Password */}
                <a href="#" className="text-sm text-gray-600 hover:underline block my-3">Forgot your password? </a>
                <button
                  type="submit" className="block w-full bg-[#887063] hover:bg-[#947c6c] transition py-2 rounded-xl h-12 text-white font-semibold mb-2">
                  Sign in
                </button>
                {/* Register */}
                <p className="text-sm text-gray-600 block text-center mt-4">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-blue-500 hover:underline">Sign up here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      ) : (
        null
      )}
    </>
  );
};
