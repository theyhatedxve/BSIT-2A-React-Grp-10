import React from "react";
import "./App.css";

function App() {
  const members = [
    { name: "Jayrold Barreto", role: "Programmer" },
    { name: "Christian Dave C. Tagadiad", role: "Programmer" },
    { name: "Clarence Burbano", role: "Member" },
    { name: "Kimberly Alegria", role: "Member" },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Group 10</h1>
        <p>Hello! and Welcome to our landing page</p>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          We are group 10 from BSIT 2A, and we are passionate about programming and technology. We work together to create amazing projects and learn new skills. Our team is dedicated to delivering high-quality work and supporting each other in our learning journey.  
        </p>
      </section>

      <section className="members">
        <h2>Our Members</h2>
        <div className="cardContainer">
          {members.map((member, index) => (
            <div key={index} className="card">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;