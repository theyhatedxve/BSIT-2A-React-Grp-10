import { useEffect, useState } from "react"
import UserCard from "./Usercard"
import "./Activity4.css"

function Activity4() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  const apiUrl = "https://api.jikan.moe/v4/anime/40748/characters"

  useEffect(function () {
    fetch(apiUrl)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        setTimeout(function () {
          setCharacters(data.data)
          setLoading(false)
        }, 1000)
      })
      .catch(function (error) {
        console.log(error)
        setLoading(false)
      })
  }, [])

  function getFilteredCharacters() {
    let result = []

    for (let i = 0; i < characters.length; i++) {
      let item = characters[i]
      let name = item.character.name.toLowerCase()
      let searchText = search.toLowerCase()

      if (filter === "All") {
        if (name.includes(searchText)) {
          result.push(item)
        }
      }

      if (filter === "Main") {
        if (item.role === "Main" && name.includes(searchText)) {
          result.push(item)
        }
      }

      if (filter === "Supporting") {
        if (item.role === "Supporting" && name.includes(searchText)) {
          result.push(item)
        }
      }
    }

    return result
  }

  const filteredCharacters = getFilteredCharacters()

  if (loading === true) {
    return (
      <div className="loader-box">
        <div className="loader"></div>
        <h2>Loading characters...</h2>
      </div>
    )
  }

  return (
    <div className="activity-page">
      <div className="header">
        <p className="small-title">Activity 4</p>
        <h1>Jujutsu Kaisen Characters</h1>
        <p>
          This page gets character data from an API using React hooks,
          reusable components, and props.
        </p>
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="Search character"
          value={search}
          onChange={function (event) {
            setSearch(event.target.value)
          }}
        />

        <button
          onClick={function () {
            setFilter("All")
          }}
        >
          All
        </button>

        <button
          onClick={function () {
            setFilter("Main")
          }}
        >
          Main
        </button>

        <button
          onClick={function () {
            setFilter("Supporting")
          }}
        >
          Supporting
        </button>
      </div>

      <p className="result-text">
        Showing {filteredCharacters.length} characters
      </p>

      <div className="character-grid">
        {filteredCharacters.map(function (item) {
          return (
            <UserCard
              key={item.character.mal_id}
              name={item.character.name}
              image={item.character.images.jpg.image_url}
              role={item.role}
              favorites={item.favorites}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Activity4
