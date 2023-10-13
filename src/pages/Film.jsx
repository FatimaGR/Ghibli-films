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
    </div>
  )
}

export default FilmPrueba