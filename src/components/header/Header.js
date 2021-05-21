import React from "react";
import { IconButton, Avatar } from "@material-ui/core";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ArrowDropDown,
  Apps as AppsIcon,
  Notifications,
} from "@material-ui/icons";

import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_light_2x_r2.png"
          alt="logo"
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>

        <Avatar />
      </div>
    </div>
  );
}

export default Header;
