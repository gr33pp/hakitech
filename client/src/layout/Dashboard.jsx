// src/components/Layout.js
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import DashboardNav, { UserInfo } from "../pages/dashboard/navigation";
import "@/pages/dashboard/dashboard.scss";
import { UserContext } from "../context";
import { fetchUserData, getNavIndex, ResetPropertyForMenu } from "../utils";
import { DashboardHead, Greetings } from "../pages/dashboard";

const DashboardLayout = () => {
  const location = useLocation();
  const { setMenu, setUser } = useContext(UserContext);

  const isAuthenticated = () => {
    return !!localStorage.getItem("authToken");
  };

  useCallback(async () => {
    if (isAuthenticated) {
      const userData = await fetchUserData(localStorage.getItem("authToken"));
      setUser(userData);
    }
  }, [setUser]);

  //   const renderNav = () => {
  //     switch (location.pathname) {
  //       case "/dashboard":
  //         return <DashboardNav index={0} />;
  //       default:
  //         return <DashboardNav index={0} />;
  //     }
  //   };
  const renderHead = () => {
    switch (location.pathname) {
      case "/dashboard":
        return <Greetings />;
      default:
        return <DashboardHead />;
    }
  };

  const handleClick = (e) => {
    // console.log(e.target, e.currentTarget.firstChild);
    if (e.target === e.currentTarget.firstChild.firstChild) {
      return;
    }
    ResetPropertyForMenu();
    setMenu(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    ResetPropertyForMenu();
    setMenu(false);
  }, [location.pathname, setMenu]);

  if (!isAuthenticated()) {
    return <Navigate to="/login" message={"You have to sign in first"} />;
  } else {
    return (
      <div className="dashboard">
        <DashboardNav index={getNavIndex(location.pathname)} />
        <div className="dashboard-content" onClick={handleClick}>
          {renderHead()}
          <Outlet />
        </div>
        <UserInfo />
      </div>
    );
  }
};

export default DashboardLayout;
