import "./landing.scss";
import Button from "@/components/button";
import {
  aboutFeatures,
  aboutSections,
  features_data,
  FollowUp,
  images,
} from "../../utils";
import { useNavigate } from "react-router-dom";
import { DashboardCard } from "../dashboard";

export function LandingPage() {
  return (
    <>
      <LandingPageHero
        title={"Transform Solar Energy Management."}
        description={
          "Discover innovative solutions for sustainable living and efficient solar energy use with our advanced technology."
        }
        imageBg
        image
      />
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

export const LandingPageHero = ({
  title,
  description,
  imageBg,
  image,
  action,
}) => {
  const navigate = useNavigate();
  return (
    <div className="landing-hero">
      <div
        className="landing-hero-image"
        style={
          imageBg && {
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.webp)`,
            backgroundColor: "#050503",
          }
        }
      ></div>
      <div className="landing-hero-content">
        <h1>{title}</h1>
        <p className="description">{description}</p>
        {action && (
          <div className="actions">
            <Button text="Get Started" onClick={() => navigate("signup")} />
            <Button
              text="Learn More"
              stroke
              onClick={() => navigate("features")}
            />
          </div>
        )}
        {image && (
          <i>
            <img
              draggable="false"
              src={`${process.env.PUBLIC_URL}/images/bulb.webp`}
              alt="revolution illustration"
            />
          </i>
        )}
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

export const AboutPage = () => {
  const description = () => (
    <div className="about-hero-desc">
      Hakitech provides the tools and insights needed to <strong>manage</strong>
      , <strong>monitor</strong>, and <strong>optimize</strong> solar energy
      usage effectively.
    </div>
  );
  return (
    <>
      <div className="about-hero">
        <LandingPageHero
          title={"Hakitech empowers users to harness solar energy efficiently."}
          description={description()}
        />
      </div>
      <div className="about-card">
        {aboutFeatures.map((feature, index) => (
          <AboutCard key={index} {...feature} />
        ))}
      </div>
      <div className="about-sections">
        {aboutSections.map((section, index) => (
          <AboutSections key={index} {...section} />
        ))}
      </div>
      {/* <DashboardCard title={"Our Mission"}>
        <p>
          Hakitech is a technology company that specializes in energy management
          and sustainability. Our mission is to provide innovative solutions for
          sustainable living and smarter energy consumption.
        </p>
      </DashboardCard>
      <p>
        We are committed to creating a more sustainable future by developing
        cutting-edge technology that helps individuals and organizations reduce
        their carbon footprint and save money on energy costs.
      </p>
      <p>
        Our team of experts is dedicated to creating products that are
        user-friendly, affordable, and environmentally friendly. We believe that
        technology can be a powerful tool for positive change, and we are proud
        to be at the forefront of the green energy revolution.
      </p>
      <p>
        Join us on our mission to create a more sustainable world for future
        generations. Together, we can make a difference.
      </p> */}
    </>
  );
};

const AboutCard = ({ title, description, icon }) => {
  return (
    <div className="about-card-item">
      <div className="about-card-icon">
        <span class="material-symbols-rounded">{icon}</span>
      </div>
      <div className="about-card-content">
        <span>{title}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

const AboutSections = ({ title, statement, icon }) => {
  return (
    <div className="about-section">
      <h2>{title}</h2>
      <span>
        <p>{statement}</p>
      </span>
    </div>
  );
};
