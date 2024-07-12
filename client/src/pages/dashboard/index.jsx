import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context";
import { ResetPropertyForMenu, SetPropertyForMenu } from "../../utils";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard-content">
      <Greetings />
    </div>
  );
}

export const Greetings = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="greetings">
      <MenuButton />
      <div>
        <span>Hi, {user?.fullName}</span>
        <span>Welcome back</span>
      </div>
    </div>
  );
};

export const MenuButton = () => {
  const { menu, setMenu } = useContext(UserContext);

  const handleClick = () => {
    SetPropertyForMenu(menu);
    setTimeout(() => {
      setMenu(!menu);
    }, 100);
  };

  useEffect(() => {
    // SetPropertyForMenu(menu);
  }, [menu]);

  useEffect(() => {
    const handleResize = () => {
      ResetPropertyForMenu();
      setMenu(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <span class="material-symbols-rounded menuBtn" onClick={handleClick}>
      {menu ? "keyboard_arrow_left" : "keyboard_arrow_right"}
    </span>
  );
};

export const DashboardCard = ({ title, path, children }) => {
  return (
    <div className="dashboard-card">
      <div className="card-head">
        <span>{title}</span>
        {path && <Link to={path}>View all</Link>}
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

