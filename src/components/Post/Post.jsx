import React from "react";
import { Avatar } from "@material-ui/core";

import "./Post.css";

// icons
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              Matt Volonnino{" "}
              <span className="post_headerSpecial">
                <VerifiedUserIcon className="post_badge" /> @mvols16
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>
              This is my twitter clone built with React and the power of Thor!
            </p>
          </div>
        </div>
        <img src={image} alt="posted image" />
        <div className="post_footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
