import '../style.css';
import Bglogin from '../../assets/Img/bg-login.jpg';
import logov2 from '../../assets/logov2.svg'
import user from '../../assets/Img/user.jpg'
import { useForm } from 'react-hook-form';

export const RegisterPage = () => {
    return (
        <div className="bg-white flex justify-center items-center h-screen">
            {/* Left: Image */}
            <div className="w-1/3 h-screen hidden lg:block">
                <img
                    src={Bglogin}
                    alt="Placeholder Image"
                    className="object-cover w-full h-full"
                />
            </div>
            {/* Right: Registration Form */}
            <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-2/3">
                <div className="lg:hidden fixed top-0 left-0 right-0 z-1  flex justify-center items-center py-4">
                    <img src={logov2} alt="Logov2" className="w-16 h-16 mr-2" />
                    <h1 className="text-lg font-semibold">lodgy</h1>
                </div>
                <h1 className="text-2xl font-semibold mb-4">Sign-Up</h1>
                <form action="#" method="POST" className="space-y-4">
                    {/* Full Name & Email Inputs */}
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Full Name" />
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>

                    {/* Password & Confirm Password Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow" placeholder="Password" />
                            </label>
                        </div>
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow" placeholder="Confirm Password" />
                            </label>
                        </div>
                    </div>
                    {/* Profile Image Input */}
                    <div>
                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                        <div className="mt-2 flex items-center gap-x-3">
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={user} />
                                </div>
                            </div>
                            <label htmlFor="file-upload" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer">Change</label>
                            <input id="file-upload" type="file" className="hidden" accept="image/*" />
                        </div>
                    </div>
                    {/* Remember Me Checkbox */}
                    <div className="flex items-center">
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
                    {/* Register Button */}
                    <button
                        type="submit"
                        className="bg-[#887063] hover:bg-[#947c6c] transition text-white font-semibold rounded-md py-2 px-4 w-full"
                    >
                        Register
                    </button>
                </form>
                {/* Sign-In Link */}
                <div className="mt-6 text-[#887063] text-center">
                    <a href="#" className="hover:underline">
                        Already have an account? Sign in here
                    </a>
                </div>
            </div>
        </div>
    );
};
