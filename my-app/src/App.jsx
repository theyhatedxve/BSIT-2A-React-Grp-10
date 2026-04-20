import React, { useState } from "react";
import "./App.css";
import Activity1 from "./Activity1/App";
import Activity2 from "./Activity2/Activity2";

function App() {
  const [activeTab, setActiveTab] = useState("activity1");

  return (
    <div className="app-wrapper">
      <nav className="app-nav">
        <div className="app-nav-brand">
          <span className="brand-dot" />
          Group 10 — BSIT 2A
        </div>
        <div className="app-nav-tabs">
          <button
            className={`nav-tab ${activeTab === "activity1" ? "active" : ""}`}
            onClick={() => setActiveTab("activity1")}
          >
            Activity 1
          </button>
          <button
            className={`nav-tab ${activeTab === "activity2" ? "active" : ""}`}
            onClick={() => setActiveTab("activity2")}
          >
            Activity 2
          </button>
        </div>
      </nav>

      <main className="app-main">
        {activeTab === "activity1" ? <Activity1 /> : <Activity2 />}
      </main>

    </div>
  );
}

export default App;