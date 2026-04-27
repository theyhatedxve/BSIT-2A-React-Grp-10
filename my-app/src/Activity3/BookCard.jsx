function BookCard({ title, author, genre, year, available }) {
  return (
    <div className="book-card">
      <div className="book-card-header">
        <h2>{title}</h2>

        <span className={available ? "status available" : "status borrowed"}>
          {available ? "Available" : "Borrowed"}
        </span>
      </div>

      <p>
        <strong>Author:</strong> {author}
      </p>

      <p>
        <strong>Genre:</strong> {genre}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>
    </div>
  )
}

export default BookCard