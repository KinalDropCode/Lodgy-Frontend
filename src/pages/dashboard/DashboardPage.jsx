import React from "react";
import { Sidebar } from "../../components/dashboard/Sidebar";
import { Content } from "../../components/dashboard/Content";


export const DashboardPage = () => {
  return (
    <>
<div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
        <Sidebar />
        <Content />
      </div>
    </>
  );
};