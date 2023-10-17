import { getFilms, getCharacters } from "../services/services.js";
import { gettingValue } from "../utils/utils.jsx";

function LocationCard({location}){
  const { films } = getFilms()
  const { characters } = getCharacters()
  const residentsList = location?.residents
  const locationFilm = gettingValue(location?.films, "films/", films)
  const locationResident = gettingValue(residentsList, "people/", characters)

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
          <p>{locationFilm?.title + ", "}</p>
        </li>
        {residentsList.includes("TODO") || residentsList.length > 0 && (<li>
          <p>Residents</p>
          <p>{locationResident?.name + ", "}</p>
        </li>)}
      </ul>
    </div>
  )
}

export default LocationCard