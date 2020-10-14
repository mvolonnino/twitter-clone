import React from "react";

import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";

// avatar
import tweetAvatar from "./img/tweet_avatar.jpeg";

// image
import thorPost from "./img/thor_post.jpg";

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox avatar={tweetAvatar} />
      {/* Post */}
      <Post avatar={tweetAvatar} image={thorPost} />
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Feed;
