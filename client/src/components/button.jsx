import React from "react";

const Button = ({ text, stroke, ...props }) => {
  return (
    <div className={`button ${stroke ? "stroke" : "fill"}`} {...props}>
      {text}
    </div>
  );
};

export default Button;
