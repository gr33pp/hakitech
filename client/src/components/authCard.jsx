import { useEffect, useState } from "react";
import Button from "./button";
import { Link } from "react-router-dom";
import PopMsg from "./popMsg";
import { validateAccount } from "../utils";

export default function AuthCard({ btnText, mode, type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
  const [msg, setMsg] = useState(false);
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
      if (validateAccount(fullName, meterNumber, email, password) !== "sent") {
        setMsg(validateAccount(fullName, meterNumber, email, password));
      } else {
        console.log("sent");
      }
    } else if (mode === "login") {
      if (validateAccount(email, password) !== "sent") {
        setMsg(validateAccount(email, password));
      } else {
        console.log("sent");
      }
    } else if (mode === "reset") {
      if (validateAccount(email) !== "sent") {
        setMsg(validateAccount(email));
      } else {
        console.log("sent");
      }
    }

    // clearInput();
  };

  return (
    <div className="auth-card">
      {msg && <PopMsg msg={msg} isActive={(e) => setMsg(e)} />}
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
              type="number"
              placeholder="Enter your meter number"
              value={meterNumber}
              onChange={(e) => setMeterNumber(e.target.value)}
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
          placeholder="Enter your email address"
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
}
