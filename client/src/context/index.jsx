import React, { createContext, useEffect, useState } from "react";
import { fetchUserData } from "../utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [menu, setMenu] = useState(false);

  const getUser = async () => {
    const userData = await fetchUserData(localStorage.getItem("authToken"));
    setUser(userData);
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log("pussy", user);

  return (
    <UserContext.Provider value={{ user, setUser, menu, setMenu }}>
      {children}
    </UserContext.Provider>
  );
};
