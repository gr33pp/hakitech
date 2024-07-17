import React, { useEffect, useState } from "react";
import "./nav.scss";
import Button from "../../../components/button";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPageNav({ title, login, signup, quickAction }) {
  const navigate = useNavigate();
  const [menuState, setMenuState] = useState(false);
  const handleClick = () => {
    setMenuState(!menuState);
    // document.getElementById("actionBtn").classList.toggle("show");
  };

  useEffect(() => {
    setMenuState(false);
  }, [title, login, signup]);

  useEffect(() => {
    const handleResize = () => {
      setMenuState(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="landing-nav" id={menuState ? "menu" : ""}>
      <div>
        {title ? (
          <div className="landing-nav-title">{title}</div>
        ) : (
          <div className="landing-nav-logo">Hakitech</div>
        )}
        <div className="landing-nav-links">
          {(!login || !signup) && (
            <>
              <Link to="">Home</Link>
              <Link to="features">Features</Link>
              <Link to="about">About us</Link>
            </>
          )}
        </div>
        <div className="landing-nav-action" id={quickAction ? "actionBtn" : ""}>
          <Button
            text={login ? "Sign Up" : "Sign In"}
            onClick={() => navigate(login ? "signup" : "login")}
          />
        </div>
        <div className="landing-nav-menuBtn">
          {!quickAction && (
            <span
              class="material-symbols-rounded menuBtn"
              id={menuState ? "turn" : ""}
              onClick={handleClick}
            >
              keyboard_arrow_down
            </span>
          )}
        </div>
      </div>
      {!quickAction && <LandingMenu />}
    </div>
  );
}

export const LandingMenu = () => {
  return (
    <div className="landing-nav-menu">
      <div className="landing-nav-menu-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About us</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
