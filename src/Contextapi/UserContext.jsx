/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [refresh, setRefresh] = useState(1);
  const navigate = useNavigate();


  useEffect(() => {
    const user = localStorage.getItem("chat-user");
    if (!user) {
      return navigate("/");
    }
    const userJSON = JSON.parse(user);
    setUser(userJSON);
  }, [refresh]);

  const contextValue = { user, refresh, setRefresh };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
