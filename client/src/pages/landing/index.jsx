import LandingPageNav from "./navigation";
import "./landing.scss";

export default function LandingPage() {
  return (
    <div className="landing">
      <LandingPageNav />
      <LandingPageHero />
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
        <div>
          <img
            draggable="false"
            src={`${process.env.PUBLIC_URL}/images/bulb.webp`}
            alt="revolution illustration"
          />
        </div>
      </div>
    </div>
  );
};
