'use client'
import { auth } from "@/auth";
import { useState, useEffect } from "react";

const useAuth = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const session = await auth();
      console.log(session)
    };
    fetchData();
  },[]);
  

  return {
    userData
  }
};

export default useAuth;
