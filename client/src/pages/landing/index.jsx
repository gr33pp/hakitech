import "./landing.scss";
import Button from "@/components/button";
import { features_data, FollowUp, images } from "../../utils";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  return (
    <>
      <LandingPageHero />
      <LandingFollowUp>
        <FollowUp />
      </LandingFollowUp>
      <LandingFeatures />
    </>
  );
}
export function FeaturesPage() {
  return (
    <>
      <LandingFeatures all />
    </>
  );
}

export const LandingPageHero = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-hero">
      <div
        className="landing-hero-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.webp)`,
        }}
      ></div>
      <div className="landing-hero-content">
        <h1>Revolutionize Energy Management.</h1>
        <p>
          Explore innovative solutions for sustainable living and smarter energy
          consumption with our cutting-edge technology.
        </p>
        <div className="actions">
          <Button text="Get Started" onClick={() => navigate("signup")} />
          <Button
            text="Learn More"
            stroke
            onClick={() => navigate("features")}
          />
        </div>
        <i>
          <img
            draggable="false"
            src={`${process.env.PUBLIC_URL}/images/bulb.webp`}
            alt="revolution illustration"
          />
        </i>
      </div>
    </div>
  );
};

export const LandingFollowUp = ({ children }) => {
  return (
    <div className="landing-followup">
      <div>{children}</div>
    </div>
  );
};

export const LandingFeatures = ({ all }) => {
  return (
    <div className="landing-features">
      {features_data.map(
        (feature, index) =>
          (!all ? index < 4 : index >= 0) && (
            <FeaturesCard key={index} idx={index} {...feature} />
          )
      )}
    </div>
  );
};

export const FeaturesCard = ({ idx, icon, title, description, image }) => {
  return (
    <div className="features-card">
      <h2>
        <span class="material-symbols-outlined">{icon}</span>
        {title}
      </h2>
      <p>{description}</p>
      <span>
        <img src={images[idx]} alt={title} draggable="false" />
      </span>
    </div>
  );
};
