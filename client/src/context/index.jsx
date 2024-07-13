import React, { createContext, useEffect, useState } from "react";
import { fetchUserData, fetchWeather, paymentHistory } from "../utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [balance, setBalance] = useState("$20.00");
  const [weather, setWeather] = useState(false);

  localStorage.setItem("authToken", "123456789");

  const getUser = async () => {
    const userData = await fetchUserData(localStorage.getItem("authToken"));
    setUser(userData);
  };

  useEffect(() => {
    getUser();

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
        menu,
        setMenu,
        profile,
        setProfile,
        balance,
        setBalance,
        weather,
        setWeather,
        history: paymentHistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
