import React from "react";
import { useEffect } from "react";
import { Sidebar } from "../../components/dashboard/Sidebar";
import { Content } from "../../components/dashboard/Content";
import { useHotel } from "../../hooks/useHotel";
import { LoadSpinner } from "../../components/LoadSpinner";

export const DashboardPage = () => {
  const { getHotels, allHotels, isFetching } = useHotel();

  useEffect(() => {
    getHotels();
  }, []);

  if (isFetching) {
    return <LoadSpinner />;
  }

  return (
    <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
      <Sidebar />
      <Content hotels={allHotels} getHotels={getHotels} />
    </div>
  );
};