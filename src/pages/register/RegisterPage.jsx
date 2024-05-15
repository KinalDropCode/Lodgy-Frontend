import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Key, User } from 'react-feather';
import { useRegister } from '../../hooks/useRegister';
import '../style.css';
import defaultAvatar from '../../assets/Img/user.jpg';
import Bglogin from '../../assets/Img/bg-login.jpg';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const { registerUser, isLoading } = useRegister();
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const onSubmit = handleSubmit(async (data) => {
        const img = selectedPhoto;
        console.log(img)
        registerUser(data.fullName, data.email, data.password, img);
    });


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result;
                setSelectedPhoto(imageData);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-white flex justify-center items-center h-screen" >
            {/* Left: Image */}
            <div className="w-1/2 h-screen hidden lg:block relative" >
                <img
                    src={Bglogin}
                    alt="Placeholder Image"
                    className="brightness-50 object-cover w-full h-full"
                />
                {/* Texto encima de la imagen */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center" >
                    <h2 className="text-4xl text-white font-semibold">Join Us Today!</h2>
                    <p className="text-lg text-white">Create your account to get started</p>
                </div >
            </div >
            <div className="flex md:w-1/2 justify-center md:py-10 items-center bg-white">
                <form onSubmit={onSubmit} className="bg-white" autoComplete='off'>
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Create an Account</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Please fill out the form below to register</p>


                    {/* Input: Photoprofile */}
                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="photo" className="cursor-pointer">
                            <div className="w-20 h-20 rounded-full overflow-hidden">
                                <img src={selectedPhoto || defaultAvatar} alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                        </label>
                        <p className="text-sm font-semibold text-gray-600 mb-3">Select an image</p>
                        <input
                            id="photo"
                            type="file"
                            className="hidden"
                            {...register("photo", {
                                required: "Photo is required",
                                onChange: handleFileChange
                            })}

                        />
                        {errors.photo && <span className="text-red-500">{errors.photo.message}</span>}
                    </div>


                    {/* Input: Fullname */}
                    <div className='mb-2'>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <User className="h-5 w-5 text-gray-400" />
                            <input type="text" className="pl-2 outline-none border-none" placeholder="Full Name" {...register("fullName", {
                                required: "Full name is required",
                                maxLength: { value: 50, message: "Full name must not exceed 50 characters" }
                            })} />
                        </div>
                        {errors.fullName && <span className="text-red-500 ml-8">{errors.fullName.message}</span>}
                    </div>

                    {/* Input: Email */}
                    <div className='mb-2'>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <Mail className="h-5 w-5 text-gray-400" />
                            <input type="email" className="pl-2 outline-none border-none" placeholder="Email" {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address", },
                                minLength: { value: 8, message: "Email must be at least 8 characters" },
                                maxLength: { value: 40, message: "Email must not exceed 40 characters" }
                            })} />
                        </div>
                        {errors.email && <span className="text-red-500 ml-8">{errors.email.message}</span>}
                    </div>


                    {/* Input: Password */}
                    <div className='mb-2'>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <Key className="h-5 w-5 text-gray-400" />
                            <input type="password" className="pl-2 outline-none border-none" placeholder="Password" {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" }
                            })} />
                        </div>
                        {errors.password && <span className="text-red-500 ml-8">{errors.password.message}</span>}
                    </div>

                    {/* Input: Confirm Password */}
                    <div className='mb-2'>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <Key className="h-5 w-5 text-gray-400" />
                            <input type="password" className="pl-2 outline-none border-none" placeholder="Confirm Password" {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: value => value === watch('password') || "Passwords do not match"
                            })} />
                        </div>
                        {errors.confirmPassword && <span className="text-red-500 ml-8">{errors.confirmPassword.message}</span>}
                    </div>

                    <button type="submit" className="block w-full bg-[#887063] h-12 hover:bg-[#947c6c] transition mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Register</button>
                    <div className="text-center mt-4">
                        <p className="text-gray-600">Already have an account?</p>
                        <Link to="/login" className="text-blue-500 hover:underline">Log in here</Link>
                    </div>
                </form>

            </div>
        </div >
    );
}
