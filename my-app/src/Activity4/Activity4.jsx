import { useState, useEffect } from "react"
import UserCard from "./UserCard"
import "./Activity4.css"

function Activity4() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=12")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users")
        return res.json()
      })
      .then((data) => {
        setUsers(data.results)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const filteredUsers = users.filter((user) => {
    if (filter === "male") return user.gender === "male"
    if (filter === "female") return user.gender === "female"
    return true
  })

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="spinner" />
        <p className="loader-text">Fetching users from API...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="loader-wrapper">
        <p className="loader-text" style={{ color: "#ef4444" }}>Error: {error}</p>
      </div>
    )
  }

  return (
    <section className="users-page">
      <div className="users-header">
        <p className="users-label">Activity 4</p>
        <h1>User Directory</h1>
        <p className="users-subtitle">
          This program fetches real user data from an external API using
          useState, useEffect, reusable components, and props.
        </p>
      </div>

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("all")}
        >
          All Users
        </button>
        <button
          className={filter === "male" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("male")}
        >
          Male
        </button>
        <button
          className={filter === "female" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("female")}
        >
          Female
        </button>
      </div>

      <div className="user-grid">
        {filteredUsers.map((user, index) => (
          <UserCard
            key={index}
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
            location={`${user.location.city}, ${user.location.country}`}
            gender={user.gender}
            picture={user.picture.large}
            age={user.dob.age}
          />
        ))}
      </div>
    </section>
  )
}

export default Activity4