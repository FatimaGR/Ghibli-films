import { getCharacters, getLocations, getFilmById } from "../services/services.js";
import { gettingFilmValues } from "../utils/utils.jsx";
import { Link, useParams } from "react-router-dom";
import { useState } from 'react'
import arrow from "../assets/icon-arrow-left.svg"
import "../styles/Film.css"

function FilmPrueba() {
  const [cantLocations, setCantLocations] = useState(1)
  let notLocations = []
  let params = useParams();
  const { locations } = getLocations()
  const { characters } = getCharacters()
  const { film } = getFilmById(params.id)

  return (
    <div className="film-container">
      <div className="film-header">
        <Link to="/films" className="back-button"><img src={arrow} alt="back" /> Back</Link>
        <div className="banner">
          <img src={film?.movie_banner} alt={film?.title} />
          <div className="titles">
            <p className="romanised">{film?.original_title_romanised}</p>
            <h1 className="english">{film?.title}</h1>
            <div>
              <hr />
              <p className="original">{film?.original_title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="film-information">
        <div className="film-description">
          <h2>{film?.title}</h2>
          {/* <br /> */}
          <p>{film?.description}</p>
          <div className="film-data">
            <p className="film-button">Duration: {film?.running_time} min</p>
            <p className="film-button">Release date: {film?.release_date}</p>
            <hr />
            <p className="film-score">{film?.rt_score}%</p>
          </div>
          <div className="film-creators">
            <p>Director: {film?.director}</p>
            <p>Producer: {film?.producer}</p>
          </div>
          {!film?.people.includes("https://ghibliapi.vercel.app/people/") &&(
            <div className="extra-information">
              <h3>Characters</h3>
              <p> {characters?.map((character) => gettingFilmValues(character, params.id, ", "))} </p>
            </div>
          )}
          {cantLocations > 0 &&(
            <div className="extra-information">
              <h3>Locations</h3>
              <p>
              {locations?.map((location) => {
                const name = gettingFilmValues(location, params.id, ", ", notLocations)
                notLocations.length === locations.length && setCantLocations(0)
                return name
              })}
              </p>
            </div>
          )}
        </div>
        <img src={film?.image} alt={film?.title} />
      </div>
    </div>
  )
}

export default FilmPrueba