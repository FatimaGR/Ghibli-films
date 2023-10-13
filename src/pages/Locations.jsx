import { Link } from "react-router-dom";
import { getFilms, getCharacters, getLocations, getFilmById } from "../services/services.js"

function Locations(){
  const { films, filmsLoading, filmsError } = getFilms()
  const { locations } = getLocations()
  const { characters } = getCharacters()

  return(
    <>
      <h1>Locations</h1>
      <ul>
        <p>Locations</p>
        {locations?.map((location) => {
          return (
            <>
              <li key={location.id}>{location.name}</li>
              <p>Films:</p>
              {location.films.map((locationFilm => {
                const locationId = locationFilm.split("https://ghibliapi.vercel.app/films/")[1]
                const film = films?.find((film) => film?.id === locationId)
                return(
                  <Link to={`/films/${film?.id}`} key={film?.id}>{film?.title}</Link>
                )
              }))}
            </>
          )
        })}
      </ul>
    </>
  )
}

export default Locations