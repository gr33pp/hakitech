import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context";
import { ResetPropertyForMenu, SetPropertyForMenu } from "../../utils";
import { Link, useLocation } from "react-router-dom";

export default function Dashboard() {
  const { balance } = useContext(UserContext);

  return (
    <div className="dashboard-container">
      <div className="dashboard-balance">
        <span className="balance">
          <div>{balance}</div>
          <span>Balance</span>
        </span>
        <span>Top up</span>
      </div>
      <DashboardUsageCard />
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
      {/* <span class="material-symbols-rounded">location_home</span> */}
    </div>
  );
};

export const DashboardHead = ({ ...props }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const name = pathname
    .substring(pathname.lastIndexOf("/") + 1)
    .split("-")
    .join(" ");

  return (
    <div className="greetings header" {...props}>
      <MenuButton />
      <div>{name}</div>
    </div>
  );
};

export const MenuButton = ({ left }) => {
  const { menu, setMenu } = useContext(UserContext);

  const handleClick = () => {
    SetPropertyForMenu(menu);
    setMenu(!menu);
  };

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
      {left ? "keyboard_arrow_left" : "keyboard_arrow_right"}
    </span>
  );
};

export const DashboardCard = ({ title, path, children, ...props }) => {
  return (
    <div className="dashboard-card" {...props}>
      <div className="card-head">
        <span>{title}</span>
        {path && <Link to={path}>View all</Link>}
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};
export const DashboardUsageCard = ({ title, ...props }) => {
  return (
    <DashboardCard title="Statistical Overview" path={"energy-usage"}>
      <div className="card-body"></div>
    </DashboardCard>
  );
};
