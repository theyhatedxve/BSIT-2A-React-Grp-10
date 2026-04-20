import React, { useState, useEffect } from "react";
import "./Activity2.css";

function Activity2() {
  const [time, setTime] = useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []); 

  const hour = time.getHours();
  let greetingMessage;

  if (hour >= 5 && hour < 12) {
    greetingMessage = "Good morning! Rise and grind, Group 10.";
  } else if (hour >= 12 && hour < 18) {
    greetingMessage = "Good afternoon! Keep pushing, Group 10.";
  } else {
    greetingMessage = "Good evening! Late-night coding session, Group 10?";
  }

  return (
    <div className="container">
      <h1>Activity 2: Group 10</h1>

      <div className="clock-box">
        <h2>Live System Clock</h2>
        <div className="time-display">
          {time.toLocaleTimeString()}
        </div>
        <div className="greeting-message">
          {greetingMessage}
        </div>
      </div>

      <div>
        <h3>Team Roster</h3>
        <div className="cardContainer">
          
          <div className="card">
            <h3>Jayrold Barreto</h3>
            <p>Programmer</p>
          </div>

          <div className="card">
            <h3>Christian Dave C. Tagadiad</h3>
            <p>Programmer</p>
          </div>

          <div className="card">
            <h3>Clarence Burbano</h3>
            <p>Member</p>
          </div>

          <div className="card">
            <h3>Kimberly Alegria</h3>
            <p>Member</p>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default Activity2;