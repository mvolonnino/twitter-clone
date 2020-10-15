import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import "./AvatarMenu.css";
import TweetAvatarContext from "../../context/tweetAvatar";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function AvatarMenu() {
  const { tweetAvatar, setTweetAvatar } = useContext(TweetAvatarContext);

  const avatarObj = {
    thor: "https://img.icons8.com/color/96/000000/thor.png",
    ironman: "https://img.icons8.com/color/96/000000/iron-man.png",
    spiderman: "https://img.icons8.com/color/96/000000/spiderman-head.png",
    captainAmerica:
      "https://img.icons8.com/color/96/000000/captain-america.png",
    thanos: "https://img.icons8.com/color/96/000000/thanos.png",
    blackWidow: "https://img.icons8.com/color/96/000000/black-widow.png",
    hawkeye: "https://img.icons8.com/color/96/000000/hawkeye.png",
    groot: "https://img.icons8.com/color/96/000000/groot.png",
    wolverine: "https://img.icons8.com/color/96/000000/wolverine.png",
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="avatar_Button">
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        className="avatar_dropdownButton"
        onClick={handleClick}
      >
        Choose Avatar
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.entries(avatarObj).map((avatar, i) => {
          return (
            <StyledMenuItem key={i} onClick={(e) => setTweetAvatar(avatar[1])}>
              <ListItemAvatar>
                <Avatar src={avatar[1]} onClick={handleClose} />
              </ListItemAvatar>
              <ListItemText primary={avatar[0]} onClick={handleClose} />
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
}
