function UserCard(props) {
  return (
    <div className="character-card">
      <img src={props.image} alt={props.name} />

      <div className="card-body">
        <span>{props.role}</span>
        <h2>{props.name}</h2>
        <p>Favorites: {props.favorites}</p>
      </div>
    </div>
  )
}

export default UserCard
