import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../../components/button";
import "./auth.scss";
import { Link } from "react-router-dom";

export default function Auth({ type }) {
  const authRef = useRef(null);

  const scrollToPage = useCallback(() => {
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
  }, [type]);
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
          <div className="auth-form">
            <FormHead title={"Reset Password"} />
            <AuthCard btnText="Send recovery link" mode="reset" type={type} />
          </div>
        ) : (
          <div className="texture">
            <img src="/images/bulb.webp" alt={"bulb"} draggable="false" />
          </div>
        )}
      </div>
      <div className="auth-form">
        <FormHead
          title={"Create Account"}
          description={"Fill in your details to create an account"}
        />
        <AuthCard btnText="Sign Up" mode="signup" type={type} />
      </div>
      <div className="auth-form">
        <FormHead
          title={"Sign In"}
          description={"Enter your details to sign in"}
        />
        <AuthCard btnText="Sign In" mode="login" type={type} />
      </div>
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

export const AuthCard = ({ btnText, mode, type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const clearInput = () => {
    setEmail("");
    setPassword("");
    setFullName("");
  };
  useEffect(() => {
    setTimeout(() => {
      clearInput();
    }, 300);
  }, [type]);

  const handleSubmit = () => {
    if (mode === "signup") {
      console.log("Signing up with:", { email, password, fullName });
    } else if (mode === "signin") {
      console.log("Signing in with:", { email, password });
    }
    clearInput();
  };

  return (
    <div className="auth-card">
      {mode === "signup" && (
        <>
          <label className="input-group">
            <span>Full Name:</span>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <span class="material-symbols-rounded">person</span>
          </label>
          <label className="input-group">
            <span>Meter number:</span>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <span class="material-symbols-rounded">speed</span>
          </label>
        </>
      )}
      <label className="input-group">
        <span>Email:</span>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span class="material-symbols-rounded">mail</span>
      </label>
      {mode !== "reset" && (
        <label className="input-group">
          <span>Password:</span>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span class="material-symbols-rounded">lock</span>
        </label>
      )}
      <Button onClick={handleSubmit} text={btnText} />
      {mode === "login" && (
        <div className="options">
          <Link to={"/reset"}>Forgotten Password?</Link>
        </div>
      )}
      <div className="quest">
        {mode === "signup" ? (
          <span>
            Already have an account? <Link to="/login">Sign In</Link>
          </span>
        ) : (
          <span>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </span>
        )}
      </div>
    </div>
  );
};
