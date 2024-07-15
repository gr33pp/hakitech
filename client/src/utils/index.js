import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import { useEffect } from "react";
import axios from "axios";

export const features_data = [
  {
    icon: "visibility",
    title: "Real-Time Monitoring",
    description:
      "Track energy usage in real-time across all connected devices to stay informed.",
  },
  {
    icon: "lightbulb",
    title: "Personalized Insights",
    description:
      "Receive tailored recommendations to optimize energy consumption based on your usage.",
  },
  {
    icon: "dashboard",
    title: "User-Friendly Dashboard",
    description:
      "Navigate an intuitive and visually appealing dashboard that makes managing energy consumption simple",
  },
  {
    icon: "general_device",
    title: "Remote Access",
    description:
      "Control and monitor your energy usage from anywhere with our website.",
  },
  {
    icon: "monitoring",
    title: "Energy Consumption Analytics",
    description: "Visualize and optimize energy usage with detailed analytics.",
  },
  {
    icon: "history_edu",
    title: "Historical Data and Reports",
    description: "Access detailed historical energy usage reports.",
  },
];

export const images = [
  "/images/realtime.webp",
  "/images/insight.webp",
  "/images/dashboard.webp",
  "/images/remote.webp",
  "/images/analytics.webp",
  "/images/remote-2.webp",
];

export const FollowUp = () => {
  return (
    <>
      <span>
        Manage energy efficiently
        <i class="material-symbols-outlined">lightbulb</i>
      </span>
      <span>
        Deploy globally
        <i class="material-symbols-outlined">language</i>
      </span>
      <span>
        Continuously optimize for sustainability
        <i class="material-symbols-outlined">cycle</i>
      </span>
    </>
  );
};

export const CTA = () => {
  const navigate = useNavigate();
  return (
    <div className="CTA">
      <div className="CTA-text">
        <span>Ready to transform your energy management?</span> Start with a
        free account or contact us for personalized solutions.
      </div>
      <div className="CTA-actions">
        <Button text="Sign Up" onClick={() => navigate("/signup")} />
        <Button text="Explore" stroke onClick={() => navigate("/features")} />
      </div>
    </div>
  );
};

export function validateAccount(fullName, meterNumber, email, password) {
  // Validate full name
  if (!fullName || fullName.trim() === "") {
    return "Full name is required.";
  }

  // Validate meter number
  if (!meterNumber || meterNumber.trim() === "") {
    return "Meter number is required.";
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return "Invalid email address.";
  }

  // Validate password
  if (!password || password.length < 6) {
    return "Password must be at least 8 characters long.";
  }

  // All validations passed
  return false;
}

export function validateLogin(email, password) {
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return "Invalid email address.";
  }

  // Validate password
  if (!password || password.length <= 0) {
    return "Invalid password.";
  }

  // All validations passed
  return false;
}
export function validateEmailRecovery(email, password) {
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return "Invalid email address.";
  }

  // All validations passed
  return false;
}

export const menuList = [
  {
    name: "Home",
    icon: "home",
    link: "",
  },
  {
    name: "Usage",
    icon: "bar_chart",
    link: "energy-usage",
  },
  {
    name: "Payment",
    icon: "payment",
    link: "payment-history",
  },
  {
    name: "Notifications",
    icon: "notifications_unread",
    link: "notification",
  },
  {
    name: "Logout",
    icon: "logout",
    link: "/login",
  },
];

export const saveToken = (token) => {
  sessionStorage.setItem("authToken", token);
};
export const getToken = () => {
  return sessionStorage.getItem("authToken");
};
export const deleteToken = () => {
  sessionStorage.removeItem("authToken");
};

// export const Navigate = ({ link, children }) => {
//   const navigate = useNavigate();
//   navigate(link);

//   return children;
// };

const dummyUser = {
  fullName: "Angelina Jolie",
  email: "angelinajolie@gmail.com",
  meterNumber: "123456789",
};

export const convertKeys = (inputObj) => {
  const { user, email, meter_number, ...rest } = inputObj;

  const outputObj = {
    fullName: user,
    email: email,
    meterNumber: meter_number,
    ...rest,
  };

  return outputObj;
};

export const notifications = [
  {
    id: 1,
    message: "Power outage detected",
    timestamp: new Date(),
  },
  {
    id: 2,
    message: "Energy consumption exceeded threshold",
    timestamp: new Date(),
  },
  {
    id: 3,
    message: "Reminder: Scheduled maintenance tomorrow",
    timestamp: new Date(),
  },
  {
    id: 4,
    message: "Low battery warning",
    timestamp: new Date(),
  },
  {
    id: 5,
    message: "Energy-saving tips for your home",
    timestamp: new Date(),
  },
];

export const paymentHistory = [];

export const energySavingTips = [
  "Turn off lights in unoccupied rooms and make use of natural light whenever possible.",
  "Unplug chargers and electronics when not in use to prevent phantom energy consumption.",
  "Replace old and inefficient electronics with newer models that are more energy-efficient.",
  "Enable power-saving modes on computers and gaming consoles.",
  "Use power strips to easily turn off multiple devices at once when not in use.",
  "Switch to energy-efficient LED light bulbs.",
];

export const SetPropertyForMenu = (menu) => {
  const root = document.documentElement;
  root.style.setProperty("--d-translatex", !menu ? "0" : "-280px");
  root.style.setProperty("--d-container-translatex", !menu ? "-200px" : "0");
  root.style.setProperty("--d-content-index", menu ? "0" : "1");
};
export const ResetPropertyForMenu = () => {
  const root = document.documentElement;
  root.style.removeProperty("--d-translatex");
  root.style.removeProperty("--d-container-translatex");
  root.style.removeProperty("--d-content-index");
};
export const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export const getNavIndex = (pathname) => {
  switch (pathname) {
    case "/dashboard":
      return 0;
    case "/dashboard/energy-usage":
      return 1;
    case "/dashboard/payment-history":
      return 2;
    case "/dashboard/notification":
      return 3;
    default:
      return 0;
  }
};

export const useStopPropagation = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

export const usageData = [
  {
    icon: "today",
    title: "Today Usage",
    value: "12.5 kWh",
    desc: "Average daily usage",
  },
  {
    icon: "weekend",
    title: "This Week Usage",
    value: "87.5 kWh",
    desc: "Average weekly usage",
  },
  {
    icon: "date_range",
    title: "Realtime energy generated",
    value: "3 MWh",
    desc: "energy generated",
  },
  {
    icon: "calendar_month",
    title: "Energy generated",
    value: "45.2 MWh",
    desc: "Average energy generated",
  },
];

export const fetchWeather = async () => {
  const apiUrl = process.env.REACT_APP_WEATHER_API_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  try {
    const response = await fetch(
      `${apiUrl}?key=${apiKey}&q=${"102.215.57.224"}&aqi=no`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
  }
};

export const fetchIpAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // console.log(data.ip);
    return data.ip;
  } catch (error) {
    console.log(error.message);
  }
};

export function convertToCurrency(balance) {
  const options = { style: "currency", currency: "USD" };
  if (balance) {
    const amount = balance / 10;
    return amount.toLocaleString("en-US", options);
  } else {
    return (0).toLocaleString("en-US", options);
  }
}

export const setupInfo = [
  {
    title: "200 Solar panels",
    icon: "solar_power",
  },
  {
    title: "200 kWh Solar Capacity",
    icon: "power",
  },
  {
    title: "1MWh Storage Capacity",
    icon: "battery_status_good",
  },
];
