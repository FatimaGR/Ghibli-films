import { getFilms, getSpecies } from "../services/services.js";

function CharacterCard({character}){
  const { films } = getFilms()
  const { species } = getSpecies()
  const specieId = character.species.split("https://ghibliapi.vercel.app/species/")[1]
  const specie = species?.find((specie) => specie?.id === specieId)

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
          <p>
          {character?.films.map((filmCharacter) => {
              const filmId = filmCharacter.split("https://ghibliapi.vercel.app/films/")[1]
              const film = films?.find((film) => film?.id === filmId)
              return(film?.title + ", ")
          })}
          </p>
        </li>
        <li>
          <p>Species</p>
          <p>{specie?.name}</p>
        </li>
      </ul>
    </div>
  )
}

export default CharacterCard