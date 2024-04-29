import '../style.css';
import Bglogin from '../../assets/Img/bg-login.jpg';
import logov2 from '../../assets/logov2.svg'
import user from '../../assets/Img/user.jpg'
import { useForm } from 'react-hook-form';

import { Mail, Key, User } from 'react-feather';

export const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

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
                <form onSubmit={onSubmit} action="#" method="POST" className="space-y-4">
                    {/* Full Name & Email Inputs */}
                    <div>
                        <label htmlFor='fullName' className="input input-bordered flex items-center gap-2">
                            <User color='#887063' />
                            <input type="text" className="grow" placeholder="Full Name"
                                {...register("fullName", {
                                    required: {
                                        value: true,
                                        message: 'The full name is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'The full name must be at least 6 characters.'
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: 'The full name must be no more than 50 characters.'
                                    }
                                })}
                            />
                        </label>
                        {
                            errors.fullName && <span className="block px-0.5 py-0.5 text-red-500 text-xs font-bold" >{errors.fullName.message}</span>
                        }
                    </div>
                    <div>
                        <label htmlFor='email' className="input input-bordered flex items-center gap-2">
                            <Mail color='#887063' />
                            <input type="email" className="grow" placeholder="Email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'The email is required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'The email must be at least 8 characters.'
                                    },
                                    maxLength: {
                                        value: 40,
                                        message: 'The email name must be no more than 40 characters.'
                                    }
                                })}
                            />
                        </label>
                        {
                            errors.email && <span className="block px-0.5 py-0.5 text-red-500 text-xs font-bold" >{errors.email.message}</span>
                        }
                    </div>

                    {/* Password & Confirm Password Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor='password' className="input input-bordered flex items-center gap-2">
                                <Key color='#887063' />
                                <input type="password" className="grow" placeholder="Password"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'The password is required'
                                        },
                                        minLength: {
                                            value: 8,
                                            message: 'The password must be at least 8 characters.'
                                        }
                                    })}
                                />
                            </label>
                            {
                                errors.password && <span className="block px-0.5 py-0.5 text-red-500 text-xs font-bold" >{errors.password.message}</span>
                            }
                        </div>
                        <div>
                            <label htmlFor='confirmPassword' className="input input-bordered flex items-center gap-2">
                                <Key color='#887063' />
                                <input type="password" className="grow" placeholder="Confirm Password"
                                    {...register("confirmPassword", {
                                        required: {
                                            value: true,
                                            message: 'The password is required'
                                        },
                                        validate: value => value === watch('password') || 'The passwords do not match'
                                    })}
                                />
                            </label>
                            {
                                errors.confirmPassword && <span className="block px-0.5 py-0.5 text-red-500 text-xs font-bold" >{errors.confirmPassword.message}</span>
                            }
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
                            <input id="file-upload" type="file" className="hidden" accept="image/*"
                                {...register("change")}
                            />
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
