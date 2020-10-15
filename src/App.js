import React, { useState, useMemo } from "react";

import "./App.css";

// components
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import TweetAvatarContext from "./context/tweetAvatar";

function App() {
  const [tweetAvatar, setTweetAvatar] = useState("");

  const tweetAvatarValue = useMemo(
    () => ({
      tweetAvatar,
      setTweetAvatar,
    }),
    [tweetAvatar, setTweetAvatar]
  );

  return (
    <TweetAvatarContext.Provider value={tweetAvatarValue}>
      <div className="app">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>
    </TweetAvatarContext.Provider>
  );
}

export default App;
