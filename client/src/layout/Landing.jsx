// src/components/Layout.js
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LandingPageNav from "../pages/landing/navigation";
import Footer from "../components/footer";
import { LandingFollowUp } from "../pages/landing";
import { CTA } from "../utils";

const IndexLayout = () => {
  const location = useLocation();
  const AuthCondition =
    location.pathname !== "/login" &&
    location.pathname !== "/signup" &&
    location.pathname !== "/reset";

  const aboutCondition = location.pathname === "/about";

  const renderHeader = () => {
    switch (location.pathname) {
      case "/features":
        return <LandingPageNav title={"features"} />;
      case "/about":
        return <LandingPageNav title={"about us"} />;
      case "/login":
        return <LandingPageNav login />;
      case "/signup":
        return <LandingPageNav signup />;
      // case "/reset":
      //   return <LandingPageNav title={"reset"} signup />;
      default:
        return <LandingPageNav />;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className={`landing ${aboutCondition ? "about" : ""}`}>
      {renderHeader()}
      <Outlet />
      {AuthCondition && (
        <LandingFollowUp>
          <CTA />
        </LandingFollowUp>
      )}
      <Footer scrollToTop={AuthCondition} />
    </div>
  );
};

export default IndexLayout;
