import { useState } from "react"
import { getLocations, getFilms } from "../services/services.js"
import Navbar from "../components/Navbar.jsx";
import locationsbanner from "../assets/locations-banner.png"
import FilterCard from "../components/FilterCard.jsx"
import Search from "../components/Search.jsx"
import LocationCard from "../components/LocationCard.jsx"
import { initialData, gettingClimate, gettingTerrains, filterLocations } from "../utils/utils.jsx";

function Locations(){
  const { locations, locationsError, locationsLoading } = getLocations()
  const { films } = getFilms()
  const [searchedLocations, setSearchedLocations] = useState([])
  const [filmFilter, setFilmFilter] = useState([])
  const [climateFilter, setClimateFilter] = useState([])
  const [terrainFilter, setTerrainFilter] = useState([])
  const [isName, setIsName] = useState(false)

  const climatesList = gettingClimate(locations)
  const terrainsList = gettingTerrains(locations)
  const locationList = initialData(locations, searchedLocations, isName);
  const filteredLocations = filterLocations(locationList, films, filmFilter, climateFilter, terrainFilter)

  function handleSearchSubmit(name){
    setIsName(true)
    const nameUpper = name.toUpperCase()
    const locationsFiltered = locations.filter((location) => location.name.toUpperCase().includes(nameUpper))
    setSearchedLocations(locationsFiltered)
  }

  function handleFilm(e){
    const film = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      setFilmFilter([...filmFilter, film]);
    } else {
      setFilmFilter(filmFilter.filter((name) => name !== film));
    }
  }

  function handleClimate(e){
    const climate = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      setClimateFilter([...climateFilter, climate]);
    } else {
      setClimateFilter(climateFilter.filter((name) => name !== climate));
    }
  }

  function handleTerrain(e){
    const terrain = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      setTerrainFilter([...terrainFilter, terrain]);
    } else {
      setTerrainFilter(terrainFilter.filter((name) => name !== terrain));
    }
  }

  return(
    <>
      <Navbar/>
      <h1>Locations</h1>
      <img src={locationsbanner} alt="locations banner" />
      <div>
        <p>Filter by: </p>
        <div>
          <p>Filters</p>
          <p>Films</p>
          {films?.map(film => <FilterCard option={film.title} handle={handleFilm} filters={filmFilter}/>)}
          <br />
          <p>Climate</p>
          {climatesList?.map(climate => <FilterCard option={climate} handle={handleClimate} filters={climateFilter}/>)}
          <br />
          <p>Terrain</p>
          {terrainsList?.map(terrain => <FilterCard option={terrain} handle={handleTerrain} filters={terrainFilter}/>)}
          <br />
        </div>
        <Search onSubmit={handleSearchSubmit}/>
      </div>
      <ul>
        {locationsError && <li>Try again...</li>}
        {locationsLoading && <li>Loading...</li>}
        {filteredLocations?.map((location) => <LocationCard key={location.id} location={location}/>)}
      </ul>
    </>
  )
}

export default Locations