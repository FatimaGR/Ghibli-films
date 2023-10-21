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
      <div className="character-list">
        <div className="descriptions">
          <p className="description">Gender</p>
          <p className="description">Age</p>
          <p className="description">Eyes color</p>
          <p className="description">Hair color</p>
          <p className="description">Films</p>
          <p className="description">Species</p>
        </div>
        <div className="informations">
          <p className="information">{character.gender}</p>
          <p className="information">{character.age}</p>
          <p className="information">{character.eye_color}</p>
          <p className="information">{character.hair_color}</p>
          <p className="information">{characterFilm?.title + ", "}</p>
          <p className="information">{specieFilm?.name}</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard