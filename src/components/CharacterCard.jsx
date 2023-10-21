import { getFilms, getSpecies } from "../services/services.js";
import { gettingValue } from "../utils/utils.jsx";

function CharacterCard({character}){
  const { films } = getFilms()
  const { species } = getSpecies()
  const specieFilm = gettingValue(false, "species/", species, character.species)
  const characterFilm = gettingValue(character?.films, "films/", films)

  return(
    <div key={character} className="character-card">
      <p className="title">{character.name}</p>
      <ul>
        <li>
          <p className="description">Gender</p>
          <p className="information">{character.gender}</p>
        </li>
        <li>
          <p className="description">Age</p>
          <p className="information">{character.age}</p>
        </li>
        <li>
          <p className="description">Eyes color</p>
          <p className="information">{character.eye_color}</p>
        </li>
        <li>
          <p className="description">Hair color</p>
          <p className="information">{character.hair_color}</p>
        </li>
        <li>
          <p className="description">Films</p>
          <p className="information">{characterFilm?.title + ", "}</p>
        </li>
        <li>
          <p className="description">Species</p>
          <p className="information">{specieFilm?.name}</p>
        </li>
      </ul>
    </div>
  )
}

export default CharacterCard