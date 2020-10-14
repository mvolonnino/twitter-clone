import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  console.log({ active, text, Icon });
  return (
    // if there has been an active prop passed through, have active color change with CSS
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
