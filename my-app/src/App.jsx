import React, { useState } from "react";
import "./App.css";
import Activity1 from "./Activity1/App";
import Activity2 from "./Activity2/Activity2";
import Activity3 from "./Activity3/Activity3";
import Activity4 from "./Activity4/Activity4";

function App() {
  const [activeTab, setActiveTab] = useState("activity1");

  return (
    <div className="app-wrapper">
      <nav className="app-nav">
        <div className="app-nav-brand">
          <span className="brand-dot" />
          Group 10 | BSIT 2A
        </div>

        <div className="app-nav-tabs">
          <button className={`nav-tab ${activeTab === "activity1" ? "active" : ""}`} onClick={() => setActiveTab("activity1")}>Activity 1</button>
          <button className={`nav-tab ${activeTab === "activity2" ? "active" : ""}`} onClick={() => setActiveTab("activity2")}>Activity 2</button>
          <button className={`nav-tab ${activeTab === "activity3" ? "active" : ""}`} onClick={() => setActiveTab("activity3")}>Activity 3</button>
          <button className={`nav-tab ${activeTab === "activity4" ? "active" : ""}`} onClick={() => setActiveTab("activity4")}>Activity 4</button> {/* ← add this */}
        </div>
      </nav>

      <main className="app-main">
        {activeTab === "activity1" && <Activity1 />}
        {activeTab === "activity2" && <Activity2 />}
        {activeTab === "activity3" && <Activity3 />}
        {activeTab === "activity4" && <Activity4 />} {/* ← add this */}
      </main>
    </div>
  );
}

export default App;