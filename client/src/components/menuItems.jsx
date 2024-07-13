import React from "react";

export default function MenuItems({ name, icon }) {
  return (
    <>
      <span class="material-symbols-rounded">{icon}</span>
      <span>{name}</span>
    </>
  );
}
