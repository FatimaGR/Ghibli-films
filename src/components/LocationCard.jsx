import { getFilms, getCharacters } from "../services/services.js";
import { gettingValue } from "../utils/utils.jsx";

function LocationCard({location}){
  const { films } = getFilms()
  const { characters } = getCharacters()
  const residentsList = location?.residents
  const locationFilm = gettingValue(location?.films, "films/", films)
  const locationResident = gettingValue(residentsList, "people/", characters)

  return(
    <div key={location} className="location-card">
      <p className="title">{location.name}</p>
      <ul>
        <li>
          <p className="description">Climate</p>
          <p className="information">{location.climate}</p>
        </li>
        <li>
          <p className="description">Terrain</p>
          <p className="information">{location.terrain}</p>
        </li>
        <li>
          <p className="description">Surface water</p>
          <p className="information">{location.surface_water}</p>
        </li>
        <li>
          <p className="description films">Films</p>
          <p className="information">{locationFilm?.title + ", "}</p>
        </li>
        {residentsList.includes("TODO") || residentsList.length > 0 && (<li>
          <p className="description residents">Residents</p>
          <p className="information">{locationResident?.name + ", "}</p>
        </li>)}
      </ul>
    </div>
  )
}

export default LocationCard