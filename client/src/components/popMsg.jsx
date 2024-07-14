import React, { useEffect } from "react";

export default function PopMsg({ msg, err, isActive = () => {} }) {
  useEffect(() => {
    setTimeout(() => {
      isActive(false);
    }, 3000);
  }, []);
  return (
    <div className="pop" id={err ? "err" : ""}>
      <span>{msg}</span>
      <span class="material-symbols-rounded" onClick={() => isActive(false)}>
        close
      </span>
    </div>
  );
}
