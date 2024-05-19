import React from "react";
import { Sidebar } from "../../components/dashboard/Sidebar";
import { Content } from "../../components/dashboard/Content";
import { useUserDetails } from "../../hooks/useUserDetails";

export const DashboardPage = () => {
  const { userDetails } = useUserDetails();

  return (
    <>
      <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
        <Sidebar />
        <Content useDetails={userDetails} />
      </div>
    </>
  );
};