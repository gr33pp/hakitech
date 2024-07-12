// src/components/Layout.js
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer";
import DashboardNav from "../pages/dashboard/navigation";

const DashboardLayout = () => {
  const location = useLocation();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/dashboard":
        return <DashboardNav title={"features"} />;

      default:
        return <DashboardNav />;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="landing">
      {renderHeader()}
      <Outlet />
      <Footer scrollToTop />
    </div>
  );
};

export default DashboardLayout;
