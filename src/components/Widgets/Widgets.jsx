import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId={"1316529163671678977"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Marvel"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          className="widgets_tweetButton"
          url={"https://www.facebook.com/matt.volonnino/"}
          options={{ text: "#reactjs is awesome", via: "MattVolonnini1" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
