import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../context";
import {
  convertToCurrency,
  fetchWeather,
  ResetPropertyForMenu,
  SetPropertyForMenu,
  usageData,
} from "../../utils";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { NotificationsCard, TipCard } from "./navigation";

export default function Dashboard() {
  return (
    <>
      <DashboardSetup />
      <DashboardCard
        title={"Account"}
        style={{
          margin: "0 0 clamp(-60px, calc(-1 * var(--d-pad-x)), -30px) 0",
        }}
      />
      <div className="banner">
        <DashboardBalance />
      </div>
      <TipCard />
      <DashboardUsageCard />
      <DashboardPaymentCard />
    </>
  );
}

export const Greetings = () => {
  const { user } = useContext(UserContext);
  const [state, setState] = useState(user?.active);

  useEffect(() => {
    console.log(user?.active, "false");
    setState(user?.active ? "online" : "offline");
  }, [user?.active]);
  return (
    <div className="greetings">
      <MenuButton />
      <div>
        <span>Hi, {user?.fullName}</span>
        <span>Welcome back</span>
      </div>
      <div className="status">
        <span className={state}></span>
        <span>{state}</span>
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
export const DashboardUsageCard = ({ title, full, ...props }) => {
  return (
    <DashboardCard title="Statistical Overview" path={"energy-usage"}>
      <div className="card-usage card">
        {usageData.map(
          (data, i) =>
            !full && i < 2 && <DashboardUsageCardItem key={i} {...data} />
        )}
      </div>
    </DashboardCard>
  );
};

export const DashboardPaymentCard = ({ title, full, ...props }) => {
  const { history } = useContext(UserContext);
  return (
    <DashboardCard title="Payment History" path={"payment-history"}>
      <div className="card-payment">
        {history.length > 0 ? (
          history.map((data, i) => (
            <NotificationsCard key={i} msg={data.message} fixed />
          ))
        ) : (
          <NotificationsCard msg="No payment history" fixed />
        )}
      </div>
    </DashboardCard>
  );
};

export const DashboardUsageCardItem = ({
  icon,
  title,
  value,
  desc,
  path,
  ...props
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "hourly";
  const [isCurrent, setIsCurrent] = useState(false);
  return (
    <div
      className="usage-card"
      id={filter === path ? "current" : ""}
      onClick={() => path && navigate(`?filter=${path}`)}
    >
      <div className="usage-card-icon">
        <span class="material-symbols-rounded">{icon}</span>
      </div>
      <div className="usage-card-item" {...props}>
        <div className="usage-card-item-title">{title}</div>
        <div className="usage-card-item-value">{value}</div>
        <div className="usage-card-item-desc">{desc}</div>
      </div>
    </div>
  );
};

export const DashboardBalance = ({ ...props }) => {
  const { user, weather, setWeather } = useContext(UserContext);
  useCallback(async () => {
    const weather = await fetchWeather();
    setWeather(weather);
  }, [setWeather]);

  return (
    <>
      <div className="dashboard-balance">
        <span className="balance">
          <div>{convertToCurrency(user?.balance)}</div>
          <span>Balance</span>
        </span>
        <div>
          <span className="action">Top up</span>
          <Link to={"payment-history"} className="action">
            View Usage
          </Link>
        </div>
      </div>

      <div className="weather">
        <span className="weather-details">
          <div>
            <span>{weather?.current?.condition?.text}</span>
            <span>Feels like: {weather?.current?.feelslike_c}°C</span>
          </div>
          <div>
            <img src={weather?.current?.condition?.icon} alt="" />
            <span>{weather?.current?.temp_c}°C</span>
          </div>
          <div>
            <span>Wind: {weather?.current?.wind_kph} km/h</span>
            <span>Humidity: {weather?.current?.humidity}%</span>
          </div>
        </span>
      </div>
    </>
  );
};

const DashboardSetup = () => {
  const { setup } = useContext(UserContext);
  return (
    <DashboardCard title="Setup information">
      <div className="dashboard-setup">
        {setup.map((data, i) => (
          <NotificationsCard key={i} msg={data.title} icon={data.icon} fixed />
        ))}
      </div>
    </DashboardCard>
  );
};
