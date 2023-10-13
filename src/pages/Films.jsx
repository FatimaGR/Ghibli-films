import { getFilms, getCharacters, getLocations, getFilmById } from "../services/services.js"

function Films(){
  const { films, filmsLoading, filmsError } = getFilms()
  const { locations } = getLocations()
  const { characters } = getCharacters()

  return(
    <>
      <h1>Films</h1>
      <ul>
        {filmsError && <li>Try again...</li>}
        {filmsLoading && <li>Loading...</li>}
        {films?.map((film) => {
          return(
            <>
              <li key={film.id}>{film.title}</li>
              <p>Characters:</p>
              {film.people.map((filmCharacter => {
                const characterId = filmCharacter.split("https://ghibliapi.vercel.app/people/")[1]
                const character = characters?.find((character) => character?.id === characterId)
                return(
                  <li key={character?.id}>{character?.name}</li>
                )
              }))}
            </>
          )
        })}
      </ul>
    </>
  )
}

export default Films