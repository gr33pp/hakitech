import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import { useEffect } from "react";

export const features_data = [
  {
    icon: "visibility",
    title: "Real-Time Monitoring",
    description:
      "Track energy usage in real-time across all connected devices to stay informed.",
    image: "image1.jpg",
  },
  {
    icon: "lightbulb",
    title: "Personalized Insights",
    description:
      "Receive tailored recommendations to optimize energy consumption based on your usage.",
    image: "image2.jpg",
  },
  {
    icon: "dashboard",
    title: "User-Friendly Dashboard",
    description:
      "Navigate an intuitive and visually appealing dashboard that makes managing energy consumption simple",
    image: "image3.jpg",
  },
  {
    icon: "general_device",
    title: "Remote Access",
    description:
      "Control and monitor your energy usage from anywhere with our website.",
    image: "image4.jpg",
  },
  {
    icon: "monitoring",
    title: "Energy Consumption Analytics",
    description: "Visualize and optimize energy usage with detailed analytics.",
    image: "image4.jpg",
  },
  {
    icon: "history_edu",
    title: "Historical Data and Reports",
    description: "Access detailed historical energy usage reports.",
    image: "image4.jpg",
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
  if (!password || password.length < 8) {
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
  if (!password || password.length < 8) {
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
    name: "Settings",
    icon: "settings",
    link: "settings",
  },
  {
    name: "Logout",
    icon: "logout",
    link: "/login",
  },
];

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

export const fetchUserData = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyUser);
    }, 0);
  });
  return data;
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

export const energySavingTips = [
  "Turn off lights when not in use to save energy.",
  "Unplug electronics when not in use to reduce standby power consumption.",
  "Use energy-efficient appliances and light bulbs to save electricity.",
  "Set your thermostat to an energy-saving temperature to reduce heating and cooling costs.",
  "Insulate your home properly to prevent energy loss and save on heating and cooling.",
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
    case "/dashboard/settings":
      return 3;
    default:
      return 0;
  }
};

export const useStopPropagation = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
