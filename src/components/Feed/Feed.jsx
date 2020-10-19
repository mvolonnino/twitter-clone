import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";

import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../../database/firebase";

// avatar
// import tweetAvatar from "./img/tweet_avatar.jpeg";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // onSnapshot gives us back a snapshot of db and listening to anytime data changes. Then setPosts to the value of the snapshot documents and map through it and grab every single doc, map and get the document data ie. displayName, username, text...
    db.collection("posts")
      .orderBy("fullStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              docID: doc.id,
              docData: doc.data(),
            };
          })
        )
      );
  }, []);
  console.log({ posts });

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox avatar="https://img.icons8.com/color/96/000000/thor.png" />
      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.docID}
            displayName={post.docData.displayName}
            username={post.docData.username}
            verified={post.docData.verified}
            text={post.docData.text}
            avatar={post.docData.avatar}
            image={post.docData.image}
            dateString={post.docData.dateString}
            timeString={post.docData.timeString}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
