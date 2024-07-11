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
];

export const images = [
  "/images/realtime.webp",
  "/images/insight.webp",
  "/images/dashboard.webp",
  "/images/remote.webp",
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
