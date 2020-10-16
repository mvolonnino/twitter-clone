import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";

import "./Post.css";

// icons
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const Post = forwardRef(
  (
    { displayName, username, verified, text, image, avatar, timestamp },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerText">
              <h3>
                {displayName}
                <span className="post_headerSpecial">
                  {verified && <VerifiedUserIcon className="post_badge" />} @
                  {username} *{" "}
                  {`${timestamp.dateString} ${timestamp.timeString}`}
                </span>
              </h3>
            </div>
            <div className="post_headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {!image ? <></> : <img src={image} alt="post" />}
          <div className="post_footer">
            <ChatBubbleOutlineIcon id="chat" fontSize="small" />
            <RepeatIcon id="retweet" fontSize="small" />
            <FavoriteBorderIcon id="favorite" fontSize="small" />
            <PublishIcon id="publish" fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
