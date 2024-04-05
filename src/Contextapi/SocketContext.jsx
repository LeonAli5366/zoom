/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useMemo } from "react";
import { io } from "socket.io-client";

export const SocketConnection = createContext();

 const SocketContext = ({ children }) => {

    const socket = useMemo(
        () =>
          io("http://localhost:5000", {
            withCredentials: true,
          }),
        []
      );
    

  const contextValue = {socket};
  return (
    <SocketConnection.Provider value={contextValue}>
      {children}
    </SocketConnection.Provider>
  );
};

export default SocketContext;
