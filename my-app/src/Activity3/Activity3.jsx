import { useEffect, useState } from "react"
import BookCard from "./BookCard"
import booksData from "./books.json"
import "./Activity3.css"

function Activity3() {
  const [books, setBooks] = useState([])
  const [filter, setFilter] = useState("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setBooks(booksData)
    setLoading(false)
  }, [])

  const filteredBooks = books.filter((book) => {
    if (filter === "available") {
      return book.available === true
    }

    if (filter === "borrowed") {
      return book.available === false
    }

    return book
  })

  if (loading) {
    return <h1 className="loading-text">Loading books...</h1>
  }

  return (
    <section className="library-page">
      <div className="library-header">
        <p className="library-label">Activity 3</p>
        <h1>Book Library Dashboard</h1>

        <p className="library-subtitle">
          This program displays book data from a JSON file using useState,
          useEffect, reusable components, and props.
        </p>
      </div>

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("all")}
        >
          All Books
        </button>

        <button
          className={filter === "available" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("available")}
        >
          Available
        </button>

        <button
          className={filter === "borrowed" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("borrowed")}
        >
          Borrowed
        </button>
      </div>

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            year={book.year}
            available={book.available}
          />
        ))}
      </div>
    </section>
  )
}

export default Activity3