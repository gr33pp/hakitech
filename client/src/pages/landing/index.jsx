import LandingPageNav from "./navigation";
import "./landing.scss";
import Button from "@/components/button";
import { CTA, features_data, FollowUp, images } from "../../utils";
import Footer from "../../components/footer";

export default function LandingPage() {
  return (
    <div className="landing">
      <LandingPageNav />
      <LandingPageHero />
      <LandingFollowUp>
        <FollowUp />
      </LandingFollowUp>
      <LandingFeatures />
      <LandingFollowUp>
        <CTA />
      </LandingFollowUp>
      <Footer />
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

const LandingFollowUp = ({ children }) => {
  return (
    <div className="landing-followup">
      <div>{children}</div>
    </div>
  );
};

const LandingFeatures = () => {
  return (
    <div className="landing-features">
      {features_data.map((feature, index) => (
        <FeaturesCard key={index} idx={index} {...feature} />
      ))}
    </div>
  );
};

const FeaturesCard = ({ idx, icon, title, description, image }) => {
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
