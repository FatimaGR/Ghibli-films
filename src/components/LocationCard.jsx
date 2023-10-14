import { getFilms, getCharacters } from "../services/services.js";

function LocationCard({location}){
  const { films } = getFilms()
  const { characters } = getCharacters()
  const residentsList = location?.residents

  return(
    <div key={location}>
      <p>{location.name}</p>
      <ul>
        <li>
          <p>Climate</p>
          <p>{location.climate}</p>
        </li>
        <li>
          <p>Terrain</p>
          <p>{location.terrain}</p>
        </li>
        <li>
          <p>Surface water</p>
          <p>{location.surface_water}</p>
        </li>
        <li>
          <p>Films</p>
          <p>
          {location?.films.map((filmLocation) => {
              const filmId = filmLocation.split("https://ghibliapi.vercel.app/films/")[1]
              const film = films?.find((film) => film?.id === filmId)
              return(film?.title + ", ")
          })}
          </p>
        </li>
        {residentsList.includes("TODO") || residentsList.length > 0 && (<li>
          <p>Residents</p>
          <p>
          {residentsList.map((residentLocation) => {
              const residentId = residentLocation.split("https://ghibliapi.vercel.app/people/")[1]
              const resident = characters?.find((resident) => resident?.id === residentId)
              return(resident?.name + ", ")
          })}
          </p>
        </li>)}
      </ul>
    </div>
  )
}

export default LocationCard