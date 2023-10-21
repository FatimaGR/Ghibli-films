import { useState } from "react"
import { getLocations, getFilms } from "../services/services.js"
import Navbar from "../components/Navbar.jsx";
import locationsbanner from "../assets/locations-banner.png"
import FilterCard from "../components/FilterCard.jsx"
import Search from "../components/Search.jsx"
import LocationCard from "../components/LocationCard.jsx"
import { initialData, gettingClimate, gettingTerrains, filterLocations } from "../utils/utils.jsx";
import arrow from "../assets/icon-arrow-bottom.svg"
import "../styles/Locations.css"

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
    <div className='locations-container'>
      <Navbar/>
      <div className="characters-content">
        <h2>Locations</h2>
        <img className="locations-banner" src={locationsbanner} alt="locations banner" />
        <div className="select-section">
          <div className="filters-container">
            <p className="filter-title">Filter by: </p>
            <div className="filter-container">
              <button className="filter-button">Films <img src={arrow} alt="more" /></button>
              <ul className="filter-list">
                {films?.map(film => <FilterCard option={film.title} handle={handleFilm} filters={filmFilter}/>)}
              </ul>
            </div>
            <div className="filter-container">
              <button className="filter-button">Climate <img src={arrow} alt="more" /></button>
              <ul className="filter-list">
                {climatesList?.map(climate => <FilterCard option={climate} handle={handleClimate} filters={climateFilter}/>)}
              </ul>
            </div>
            <div className="filter-container">
              <button className="filter-button">Terrain <img src={arrow} alt="more" /></button>
              <ul className="filter-list">
                {terrainsList?.map(terrain => <FilterCard option={terrain} handle={handleTerrain} filters={terrainFilter}/>)}
              </ul>
            </div>
          </div>
          <Search onSubmit={handleSearchSubmit}/>
        </div>
        <ul className="location-cards">
          {locationsError && <li>Try again...</li>}
          {locationsLoading && <li className="loading">Loading...</li>}
          {filteredLocations?.map((location) => <LocationCard key={location.id} location={location}/>)}
        </ul>
      </div>
    </div>
  )
}

export default Locations