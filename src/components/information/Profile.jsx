import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useInformation } from '../../hooks/useInformation';

export const Profile = ({ user }) => {

    const { update } = useInformation();

    const [selectedPhoto, setSelectedPhoto] = useState(user.img);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            fullName: user ? user.name : '',
            email: user ? user.email : '',
        }
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



    const onSubmit = handleSubmit(async (data) => {
        const img = selectedPhoto;
        update({
            name: data.fullName,
            email: data.email,
            img: img
        });

    });

    return (
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 className="text-xl font-bold sm:text-3xl">Your information
                    {user.role === "USER_ROLE" ?
                        (<span className="badge badge-warning gap-2 ml-2"> USUARIO</span>) :
                        (<> </>)
                    }
                </h2>
                <form onSubmit={onSubmit} autoComplete='off'>

                    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                        <img className="object-cover w-36 h-36 p-1 rounded-full "
                            src={selectedPhoto}
                            alt="Bordered avatar" />

                        <div className="flex flex-col space-y-5 sm:ml-8">

                            <label htmlFor="photo" className="py-3.5 px-7 text-base font-medium text-white  bg-[#643914] rounded-lg hover:bg-[#887063] ">
                                Change picture
                            </label>

                            <input
                                id="photo"
                                type="file"
                                className="hidden"
                                {...register("photo", {
                                    onChange: handleFileChange

                                })} />

                        </div>
                    </div>
                    <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                        <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label htmlFor="fullName"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                    first name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="fullName"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    {...register("fullName", {
                                        required: "Full name is required",
                                        maxLength: { value: 50, message: "Full name must not exceed 50 characters" }
                                    })}
                                />
                                {errors.fullName && <span className="text-red-500 ml-8 ">{errors.fullName.message}</span>}
                            </div>

                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label htmlFor="email"
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address", },
                                    minLength: { value: 8, message: "Email must be at least 8 characters" },
                                    maxLength: { value: 40, message: "Email must not exceed 40 characters" }
                                })} />
                            {errors.email && <span className="text-red-500 ml-8">{errors.email.message}</span>}
                        </div>

                        <button type="submit" className="bg-[#947c6c] text-white px-4 py-2 rounded-md hover:bg-[#887063]">
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
