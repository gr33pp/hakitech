// src/components/Layout.js
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LandingPageNav from "../pages/landing/navigation";
import Footer from "../components/footer";
import { LandingFollowUp } from "../pages/landing";
import { CTA } from "../utils";

const DashboardLayout = () => {
  const location = useLocation();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/dashboard":
        return <LandingPageNav title={"features"} />;
      case "/contact":
        return <LandingPageNav title={"contact"} />;
      default:
        return <LandingPageNav />;
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
