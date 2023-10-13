import { getFilms, getCharacters, getLocations, getFilmById } from "../services/services.js";
import { Link, useParams } from "react-router-dom";

function FilmPrueba() {
  let params = useParams();
  const { films, filmsLoading, filmsError } = getFilms()
  const { locations, locationsLoading, locationsError } = getLocations()
  const { characters } = getCharacters()
  const { film } = getFilmById(params.id)

  return (
    <div key={film?.id}>
      <h1>{film?.title}</h1>
      <img src={film?.image} alt={film?.title} />
      <p>Characters</p>
      <p>
      {film.people.map((filmCharacter => {
        const characterId = filmCharacter.split("https://ghibliapi.vercel.app/people/")[1]
        const character = characters?.find((character) => character?.id === characterId)
        return(character?.name + ", ")
      }))}
      </p>
    </div>
  )
}

export default FilmPrueba