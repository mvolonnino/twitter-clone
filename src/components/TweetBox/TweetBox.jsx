import React, { useState, useContext } from "react";

import "./TweetBox.css";

import { Avatar, Button } from "@material-ui/core";
import db from "../../database/firebase";
import AvatarMenu from "../Menu/AvatarMenu";
import TweetAvatarContext from "../../context/tweetAvatar";

// icons
import ImageIcon from "@material-ui/icons/Image";

function TweetBox({ avatar }) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetDisplayName, setTweetDisplayName] = useState("");
  const [tweetUsername, setTweetUsername] = useState("");
  // const [tweetVerified, setTweetVerified] = useState(false);
  const [tweetImage, setTweetImage] = useState("");
  const { tweetAvatar, setTweetAvatar } = useContext(TweetAvatarContext);

  const sendTweet = (event) => {
    event.preventDefault();

    db.collection("posts")
      .add({
        displayName: tweetAvatar.displayName,
        username: tweetAvatar.username,
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: tweetAvatar.url,
      })
      .then(
        setTweetDisplayName(""),
        setTweetMessage(""),
        setTweetUsername(""),
        setTweetImage(""),
        setTweetAvatar("")
      );
  };
  return (
    <div className="tweetBox">
      <form>
        <AvatarMenu />
        <div className="tweetBox_input">
          <Avatar src={tweetAvatar.url} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          ></input>
        </div>
        <div className="tweetInfo_display">
          <div className="tweetInfo_name">
            <label for="displayName">Display Name:</label>
            <input
              id="displayName"
              onChange={(e) => setTweetDisplayName(e.target.value)}
              value={tweetAvatar.displayName}
              placeholder="Tell us your name"
              type="text"
            ></input>
          </div>
          <div className="tweetInfo_username">
            <label for="username">Username:</label>
            <input
              id="username"
              onChange={(e) => setTweetUsername(e.target.value)}
              value={tweetAvatar.username}
              placeholder="Tell us your username?"
              type="text"
            ></input>
          </div>
        </div>

        <div className="tweetBox_image">
          <ImageIcon className="imageIcon" />
          <input
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            className="tweetBox_imageInput"
            placeholder="Optional: Enter image URL"
            type="text"
          ></input>
        </div>

        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
