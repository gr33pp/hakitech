// src/components/Layout.js
import React, { useCallback, useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import DashboardNav, { UserInfo } from "../pages/dashboard/navigation";
import "@/pages/dashboard/dashboard.scss";
import { UserContext } from "../context";
import { fetchUserData } from "../utils";

const DashboardLayout = () => {
  const location = useLocation();
  const { user, setUser } = useContext(UserContext);

  const isAuthenticated = () => {
    return !!localStorage.getItem("authToken");
  };

  useCallback(async () => {
    if (isAuthenticated) {
      const userData = await fetchUserData(localStorage.getItem("authToken"));
      setUser(userData);
    }
  }, [setUser]);

  const renderNav = () => {
    switch (location.pathname) {
      case "/dashboard":
        return <DashboardNav index={0} />;
      default:
        return <DashboardNav index={0} />;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  if (!isAuthenticated()) {
    return <Navigate to="/login" message={"You have to sign in first"} />;
  } else {
    return (
      <div className="dashboard">
        {renderNav()}
        <Outlet />
        <UserInfo />
      </div>
    );
  }
};

export default DashboardLayout;
