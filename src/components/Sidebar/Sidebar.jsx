import React from "react";

import "./Sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";

// icons
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

// button
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <TwitterIcon />
      {/* SidbarOption */}
      <SidebarOption active Icon={HomeIcon} text="Home" />
      {/* SidbarOption */}
      <SidebarOption Icon={SearchIcon} text="Explore" />
      {/* SidbarOption */}
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      {/* SidbarOption */}
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      {/* SidbarOption */}
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      {/* SidbarOption */}
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      {/* SidbarOption */}
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      {/* SidbarOption */}
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* BUtton -> Tweet */}
      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
