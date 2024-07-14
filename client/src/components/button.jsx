import React from "react";

const Button = ({ text, stroke, loading, ...props }) => {
  return (
    <div
      className={`button ${stroke ? "stroke" : "fill"} ${
        loading ? "loading" : ""
      }`}
      {...props}
    >
      <span>
        <span class="material-symbols-rounded">progress_activity</span>
      </span>
      <span>{text}</span>
    </div>
  );
};

export default Button;
