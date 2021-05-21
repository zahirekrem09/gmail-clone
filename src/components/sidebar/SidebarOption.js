import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./style.css";

function SidebarOption({ Icon, title = "title", notify, selected, path }) {
  const history = useHistory();
  selected = history.location.pathname == path;
  return (
    <Link
      to={path}
      className={`SidebarOption ${selected && "sidebar--active"}`}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{notify && notify}</p>
    </Link>
  );
}

export default SidebarOption;
