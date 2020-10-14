import React from "react";

import "./TweetBox.css";

import { Avatar, Button } from "@material-ui/core";

// icons
import ImageIcon from "@material-ui/icons/Image";

function TweetBox({ avatar }) {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src={avatar} />
          <input placeholder="What's happening?" type="text"></input>
        </div>
        <div className="tweetBox_image">
          <ImageIcon className="imageIcon" />
          <input
            className="tweetBox_imageInput"
            placeholder="Optional: Enter image URL"
            type="text"
          ></input>
        </div>
        <Button className="tweetBox_tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
