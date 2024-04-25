import '../style.css';
import Bglogin from '../../assets/Img/bg-login.jpg'
import { useForm } from 'react-hook-form';
import logov2 from '../../assets/logov2.svg'


import { Mail, Key } from 'react-feather';


export const LoginPage = () => {
    return (
        <div className="bg-white flex justify-center items-center h-screen">
            {/* Left: Image */}
            <div className="w-1/2 h-screen hidden lg:block relative">
                <img
                    src={Bglogin}
                    alt="Placeholder Image"
                    className="brightness-50 object-cover w-full h-full"
                />
                {/* Texto encima de la imagen */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                    <h2 className="text-4xl text-white font-semibold">Welcome Back!</h2>
                    <p className="text-lg text-white">Please sign in to continue</p>
                </div>
            </div>
            {/* Right: Login Form */}
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Sing-In</h1>
                <form action="#" method="POST">
                    {/* Username Input */}
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <Mail color='#887063' />
                            <input type="email" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <Key color='#887063' />
                            <input type="password" className="grow" placeholder="Password" />
                        </label>
                    </div>
                    {/* Remember Me Checkbox */}
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            name="remember"
                            className="text-[#c49454]"
                        />
                        <label htmlFor="remember" className="text-gray-600 ml-2">
                            Remember Me
                        </label>
                    </div>
                    {/* Forgot Password Link */}
                    <div className="mb-6 text-[#887063]">
                        <a href="#" className="hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                    {/* Login Button */}
                    <button
                        type="submit"
                        className=" bg-[#887063] hover:bg-[#947c6c] transition  text-white font-semibold rounded-md py-2 px-4 w-full"
                    >
                        Login
                    </button>
                </form>
                {/* Sign up  Link */}
                <div className="mt-6 text-[#887063] text-center">
                    <a href="#" className="hover:underline">
                        Sign up Here
                    </a>
                </div>
            </div>
        </div>
    );
}

