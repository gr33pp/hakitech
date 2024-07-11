import React from "react";
import "./nav.scss";
import Button from "../../../components/button";

export default function LandingPageNav() {
  return (
    <div className="landing-nav">
      <div className="landing-nav-logo">Logo</div>
      <div className="landing-nav-links">
        <span href="#about">About</span>
        <span href="#services">Services</span>
        <span href="#contact">Contact</span>
      </div>
      <div className="landing-nav-action">
        <Button text="Sign In" />
      </div>
    </div>
  );
}
