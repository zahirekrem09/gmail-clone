import React from "react";
import { useHistory } from "react-router";
import { Button, IconButton } from "@material-ui/core";
import {
  Add,
  Inbox,
  Star,
  NearMe,
  LabelImportant,
  AccessTime,
  Note,
  ExpandMore,
  Person,
  Duo,
  Phone,
} from "@material-ui/icons";
import "./style.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  const history = useHistory();
  const sidebarRoute = [
    {
      title: "Inbox",
      Icon: Inbox,
      notify: 20,
      path: "/",
    },
    {
      title: "Starred",
      Icon: Star,
      notify: 20,
      path: "/starred",
    },
    {
      title: "Snoozed",
      Icon: AccessTime,
      notify: 20,
      path: "/snoozed",
    },
    {
      title: "Important",
      Icon: LabelImportant,
      notify: 20,
      path: "/Important",
    },
    {
      title: "Sent",
      Icon: NearMe,
      notify: 20,
      path: "/sent",
    },
    {
      title: "Drafts",
      Icon: Note,
      notify: 20,
      path: "/drafts",
    },
    {
      title: "More",
      Icon: ExpandMore,
      path: "/more",
    },
  ];
  console.log(history.location.pathname);
  return (
    <div className="sidebar">
      <Button startIcon={<Add fontSize="large" />} className="sidebar__compose">
        Compose
      </Button>
      {sidebarRoute.map((route) => (
        <SidebarOption
          key={route.title}
          Icon={route.Icon}
          title={route.title}
          notify={route.notify}
          selected={history.location.pathname === route.path}
          path={route.path}
        />
      ))}
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
