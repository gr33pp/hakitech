import React, { createContext, useEffect, useState } from "react";
import {
  fetchWeather,
  getToken,
  notifications,
  paymentHistory,
  setupInfo,
} from "../utils";
import { fetchUserData } from "../utils/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [weather, setWeather] = useState(false);
  // const [isActive, setIsActive] = useState(true);

  // localStorage.removeItem("authToken");

  const getUser = async () => {
    if (getToken() !== null && !user) {
      const userData = await fetchUserData();
      setUser(userData);
    }
  };

  useEffect(() => {
    // getUser();
    const fetchWeatherData = async () => {
      const weather = await fetchWeather();
      setWeather(weather);
    };

    fetchWeatherData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        getUser: () => getUser(),
        menu,
        setMenu,
        profile,
        setProfile,
        // balance,
        // setBalance,
        weather,
        setWeather,
        history: paymentHistory,
        notifications: notifications,
        setup: setupInfo,
        // isActive,
        // setIsActive,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
