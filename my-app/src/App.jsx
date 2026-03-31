import React from "react";
import "./App.css";

function App() {
  const members = [
    { name: "John Doe", role: "Leader" },
    { name: "Jane Smith", role: "Developer" },
    { name: "Mark Lee", role: "Designer" },
    { name: "Anna Cruz", role: "Researcher" },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Our Group</h1>
        <p>Welcome to our landing page</p>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a group of students working together to complete projects and
          learn new skills in technology.
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

      <footer className="footer">
        <p>© 2026 Our Group</p>
      </footer>
    </div>
  );
}

export default App;