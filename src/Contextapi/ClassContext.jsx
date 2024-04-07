/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./UserContext";
import { toast } from "react-hot-toast";

export const UserClass = createContext();

const ClassContext = ({ children }) => {
  const [myClass, setMyClass] = useState({});
  const [classRefresh, setClassRefresh] = useState(1);
  const user = localStorage.getItem("chat-user");
  if (user?.email) {
    useEffect(() => {
      fetch(
        `http://localhost:5000/api/v1/class/studentClass?email=mdbiplub13@gmail.com`
      )
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
          if (data.status === "success") {
            setMyClass(data.studentClasses);

          } else {
            toast.error("something went wrong");
          }
        });
    }, [user]);
  }

  const vlaue = { classRefresh, setClassRefresh, myClass };
  return <UserClass.Provider value={vlaue}>{children}</UserClass.Provider>;
};

export default ClassContext;
