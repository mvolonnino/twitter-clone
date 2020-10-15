import React, { useState, useEffect } from "react";

import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../../database/firebase";

// avatar
import tweetAvatar from "./img/tweet_avatar.jpeg";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // onSnapshot gives us back a snapshot of db and listening to anytime data changes. Then setPosts to the value of the snapshot documents and map through it and grab every single doc, map and get the document data ie. displayName, username, text...
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox avatar={tweetAvatar} />
      {/* Post */}
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
