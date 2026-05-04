function UserCard({ name, email, location, gender, picture, age }) {
  return (
    <div className="user-card">
      <div className="user-card-top">
        <img src={picture} alt={name} className="user-avatar" />
        <span className={`gender-badge ${gender}`}>
          {gender === "male" ? "♂ Male" : "♀ Female"}
        </span>
      </div>

      <div className="user-card-body">
        <h2>{name}</h2>
        <p className="user-age">Age: {age}</p>
        <p className="user-info">📧 {email}</p>
        <p className="user-info">📍 {location}</p>
      </div>
    </div>
  )
}

export default UserCard