import React from "react";
import "./style.css";

function SidebarOption({ Icon, title = "title", notify, selected = false }) {
  return (
    <div className={`SidebarOption ${selected && "sidebar--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{notify && notify}</p>
    </div>
  );
}

export default SidebarOption;
