import React, { useContext, useEffect, useState } from "react";
import "./nav.scss";
import { energySavingTips, menuList } from "../../../utils";
import MenuItems from "../../../components/menuItems";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context";
import { MenuButton } from "..";

export default function DashboardNav({ index, ...props }) {
  return (
    <div className="dashboard-nav" {...props}>
      <div className="nav-head">
        <i>
          <MenuButton left />
        </i>
        <span>Hakitech</span>
      </div>
      <div className="nav-menu">
        {menuList.map((menu, i) => (
          <Link
            to={menu.link}
            key={i}
            className={`nav-item ${i === index ? "active" : ""}`}
          >
            <MenuItems {...menu} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export const UserInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="user-info">
      <UserProfileCard user={user} />
      <Notification />
      <TipCard />
    </div>
  );
};

const UserProfileCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        <span>{user?.fullName?.charAt(0).toUpperCase()}</span>
      </div>
      <div className="user-details">
        <span>{user?.fullName}</span>
        <span>{user?.email}</span>
        <span>{user?.meterNumber}</span>
      </div>
    </div>
  );
};

export const Notification = ({ path }) => {
  const { notifications } = useContext(UserContext);
  const [notification, setNotification] = useState();

  useEffect(() => {
    if (!notification) {
      console.log("pussy");
      notifications && !path
        ? setNotification(notifications.filter((_, i) => i < 3))
        : setNotification(notifications);
    }
  }, []);
  return (
    <div className="notification" id={path ? "path" : ""}>
      {!path && (
        <div className="notification-head">
          <span>Notifications</span>
          <i class="material-symbols-rounded">notifications</i>
        </div>
      )}
      <div className="notification-card">
        {notification && notification.length > 0 ? (
          notification.map((data, i) => (
            <NotificationsCard
              key={i}
              msg={data.message}
              setData={setNotification}
              data={notification}
            />
          ))
        ) : (
          <NotificationsCard msg="No new notification" fixed />
        )}
      </div>
    </div>
  );
};

export const NotificationsCard = ({
  msg,
  setData,
  data,
  fixed,
  icon,
  children,
  ...props
}) => {
  return (
    <div className="notification-card-details" {...props}>
      {children}
      {icon && <span className="material-symbols-rounded icon">{icon}</span>}
      <span>{msg}</span>
      {!fixed && (
        <span
          class="material-symbols-rounded"
          onClick={(e) => setData(data.filter((item) => item.message !== msg))}
        >
          close
        </span>
      )}
      {/* <span>{notification.timestamp}</span> */}
    </div>
  );
};

export const TipCard = () => {
  const tips = () => {
    const randomIndex = Math.floor(Math.random() * energySavingTips.length);
    const randomTip = energySavingTips[randomIndex];
    return randomTip;
  };

  return (
    <div className="notification tips">
      <div className="notification-head">
        <span>Energy Saving Tips</span>
        <i class="material-symbols-rounded">lightbulb</i>
      </div>
      <NotificationsCard msg={tips()} fixed />
    </div>
  );
};
