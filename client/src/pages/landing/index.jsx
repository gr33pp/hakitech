import LandingPageNav from "./navigation";
import "./landing.scss";
import Button from "../../components/button";

export default function LandingPage() {
  return (
    <div className="landing">
      <LandingPageNav />
      <LandingPageHero />
      <LandingFollowUp />
    </div>
  );
}

const LandingPageHero = () => {
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
          <Button text="Get Started" />
          <Button text="Learn More" stroke />
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

const LandingFollowUp = () => {
  return (
    <div className="landing-follow-up">
      Manage energy efficiently, deploy globally, and continuously optimize for
      sustainability.
    </div>
  );
};
