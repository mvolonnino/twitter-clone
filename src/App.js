import React from "react";

import "./App.css";

// components
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="app">
      <h1>Twitter Clone</h1>

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
      {/* Widgets */}
    </div>
  );
}

export default App;
