import { useCallback, useEffect, useRef } from "react";
import "./auth.scss";
import AuthCard from "../../components/authCard";

export default function Auth({ type }) {
  const authRef = useRef(null);

  const scrollToPage = useCallback(
    (e) => {
      if (type === "login") {
        authRef.current.scrollTo({
          left: authRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        authRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    },
    [type]
  );
  useEffect(() => {
    scrollToPage();
  }, [type, scrollToPage]);

  useEffect(() => {
    const handleResize = () => {
      scrollToPage();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollToPage]);

  return (
    <div
      className={`auth ${
        type === "login" ? "login" : type === "reset" ? "reset" : "signup"
      }`}
      ref={authRef}
    >
      <div className={"auth-slider"}>
        {type === "reset" ? (
          <AuthForm
            type={type}
            title={"Reset Password"}
            mode="reset"
            btnText="Reset"
          />
        ) : (
          <div className="texture">
            <img src="/images/bulb.webp" alt={"bulb"} draggable="false" />
          </div>
        )}
      </div>
      <AuthForm
        type={type}
        title={"Create Account"}
        description={"Fill in your details to create an account"}
        mode="signup"
        btnText="Sign Up"
      />
      <AuthForm type={type} title={"Sign In"} mode="login" btnText="Sign In" />
    </div>
  );
}

export const FormHead = ({ title, description }) => {
  return (
    <div className="form-head">
      <div>{title}</div>
      {/* <span>{description}</span> */}
    </div>
  );
};

const AuthForm = ({ type, title, description, mode, btnText }) => (
  <div className="auth-form">
    <FormHead title={title} description={description} />
    <AuthCard btnText={btnText} mode={mode} type={type} />
  </div>
);
