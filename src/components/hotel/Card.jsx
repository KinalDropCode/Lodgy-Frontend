import React from 'react';

export const Card = ({
    id,
    name,
    address,
    phone,
    email,
    rooms,
    reviews,
    events
}) => {
    return (
        <div className="w-full   lg:flex h-72 rounded-lg overflow-hidden shadow-md">
            <div className="h-48 lg:h-auto lg:w-72 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }} title="Woman holding a mug">
            </div>
            <div className="bg-white p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-grey-dark flex items-center">
                        {address}
                    </p>
                    <div className="text-black font-bold text-xl mb-2">{name}</div>
                    <p className="text-grey-darker text-base">{phone}</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="text-black leading-none">{email}</p>
                        <p className="text-grey-dark">{rooms}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
