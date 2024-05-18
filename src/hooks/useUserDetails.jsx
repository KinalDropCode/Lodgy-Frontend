/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useAuth } from "./useAuth";

const getUserDetails = () => {
  const userDetails = localStorage.getItem("user");
  
  if (userDetails) {
    return JSON.parse(userDetails);
  }
  return null;
};

export const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState(getUserDetails());
  const {logout}= useAuth();

 

  return {
    isLogged: Boolean(userDetails),
    userDetails: userDetails,
    logout,
  };
};
