import { getFilms, getSpecies } from "../services/services.js";
import { gettingValue } from "../utils/utils.jsx";

function CharacterCard({character}){
  const { films } = getFilms()
  const { species } = getSpecies()
  const specieFilm = gettingValue(false, "species/", species, character.species)
  const characterFilm = gettingValue(character?.films, "films/", films)

  return(
    <div key={character}>
      <p>{character.name}</p>
      <ul>
        <li>
          <p>Gender</p>
          <p>{character.gender}</p>
        </li>
        <li>
          <p>Age</p>
          <p>{character.age}</p>
        </li>
        <li>
          <p>Eyes color</p>
          <p>{character.eye_color}</p>
        </li>
        <li>
          <p>Hair color</p>
          <p>{character.hair_color}</p>
        </li>
        <li>
          <p>Films</p>
          <p>{characterFilm?.title + ", "}</p>
        </li>
        <li>
          <p>Species</p>
          <p>{specieFilm?.name}</p>
        </li>
      </ul>
    </div>
  )
}

export default CharacterCard