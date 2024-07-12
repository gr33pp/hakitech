import React from "react";
import "./nav.scss";
import Button from "../../../components/button";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPageNav({ title, login, signup }) {
  const navigate = useNavigate();
  return (
    <div className="landing-nav">
      <div>
        {title ? (
          <div className="landing-nav-title">{title}</div>
        ) : (
          <div className="landing-nav-logo">Hackitech</div>
        )}
        <div className="landing-nav-links">
          {(!login || !signup) && (
            <>
              <Link to="">Home</Link>
              <Link to="features">Features</Link>
              <Link to="signup">Sign up</Link>
            </>
          )}
        </div>
        <div className="landing-nav-action">
          <Button
            text={login ? "Sign Up" : "Sign In"}
            onClick={() => navigate(login ? "signup" : "login")}
          />
        </div>
      </div>
    </div>
  );
}
