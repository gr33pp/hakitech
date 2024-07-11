import Button from "../components/button";

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
    icon: "general_device",
    title: "Energy Consumption Analytics",
    description: "Visualize and optimize energy usage with detailed analytics.",
    image: "image4.jpg",
  },
  {
    icon: "general_device",
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
  return (
    <div className="CTA">
      <div className="CTA-text">
        <span>Ready to transform your energy management?</span> Start with a
        free account or contact us for personalized solutions.
      </div>
      <div className="CTA-actions">
        <Button text="Sign Up" />
        <Button text="Explore" stroke />
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
