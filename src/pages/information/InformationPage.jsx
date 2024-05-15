import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { useUserDetails } from '../../hooks/useUserDetails';
import { Sidebar } from '../../components/information/Sidebar';
import { Content } from '../../components/information/Content';
export const InformationPage = () => {

    const { userDetails } = useUserDetails();

    return (
        <>
            <Navbar />
            <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
                <Sidebar />
                <Content useDetails={userDetails} />
            </div>
        </>
    );
}

