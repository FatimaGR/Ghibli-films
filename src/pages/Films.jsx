import { useState } from "react"
import { getFilms, getLocations } from "../services/services.js"
import { gettingDirectors, gettingYears, initialData, filterFilms } from "../utils/utils.jsx"
import Navbar from "../components/Navbar.jsx"
import FilmCard from "../components/FilmCard.jsx"
import Search from "../components/Search.jsx"
import FilterCard from "../components/FilterCard.jsx"
import filmsbanner from "../assets/films-banner.png"
import arrow from "../assets/icon-arrow-bottom.svg"
import "../styles/Films.css"

function Films(){
  const { films, filmsLoading, filmsError } = getFilms()
  const { locations } = getLocations()
  const [searchedFilms, setSearchedFilms] = useState([])
  const [directorFilter, setDirectorFilter] = useState([])
  const [yearFilter, setYearFilter] = useState([])
  const [locationFilter, setLocationFilter] = useState([])
  const [isName, setIsName] = useState(false)
  
  const [locationToggle, setLocationToggle] = useState(false)
  const [yearToggle, setYearToggle] = useState(false)
  const [directorToggle, setDirectorToggle] = useState(false)

  const directorsList = gettingDirectors(films)
  const yearsList = gettingYears(films)
  const filmsList = initialData(films, searchedFilms, isName)
  const filteredFilms = filterFilms(filmsList, directorFilter, yearFilter, locations, locationFilter)

  function handleSearchSubmit(name){
    setIsName(true)
    const nameUpper = name.toUpperCase()
    const filmsFiltered = films.filter((film) => film.title.toUpperCase().includes(nameUpper))
    setSearchedFilms(filmsFiltered)
  }
  
  function handleDirector(e){
    const director = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      setDirectorFilter([...directorFilter, director]);
    } else {
      setDirectorFilter(directorFilter.filter(name => name != director))
    }
  }
  function handleYear(e){
    const newYear = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      setYearFilter([...yearFilter, newYear]);
    } else {
      setYearFilter(yearFilter.filter(year => year != newYear))
    }
  }
  function handleLocation(e){
    const location = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      setLocationFilter([...locationFilter, location]);
    } else {
      setLocationFilter(locationFilter.filter(name => name != location))
    }
  }

  function handleLocationToggle(){
    setLocationToggle(!locationToggle)
  }
  function handleYearToggle(){
    setYearToggle(!yearToggle)
  }
  function handleDirecterToggle(){
    setDirectorToggle(!directorToggle)
  }

  return(
    <div className="films-container">
      <Navbar/>
      <div className="films-content">
        <h2>Films</h2>
        <div className="films-banner">
          <img src={filmsbanner} alt="films banner" />
          <div className="description flex">
            <hr />
            <h3>Howl's Moving Castle</h3>
            <p className="romanji">ハウルの動く城</p>
            <p className="romanji"></p>
            <p>When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.</p>
          </div>
        </div>
        <div className="select-section">
          <div className="filters-container">
            <p className="filter-title">Filter by: </p>
            <div className="filter-container">
              <button className="filter-button" onClick={handleLocationToggle}>Locations <img src={arrow} alt="more" /></button>
              <ul className={locationToggle ? "filter-list" : "none"}>
              {locations?.map(location => <FilterCard option={location.name} handle={handleLocation} filters={locationFilter}/>)}
              </ul>
            </div>
            <div className="filter-container" onClick={handleYearToggle}>
              <button className="filter-button">Release date <img src={arrow} alt="more" /></button>
              <ul className={yearToggle ? "filter-list" : "none"}>
                {yearsList?.map(year => <FilterCard option={year} handle={handleYear} filters={yearFilter}/>)}
              </ul>
            </div>
            <div className="filter-container" onClick={handleDirecterToggle}>
              <button className="filter-button">Director <img src={arrow} alt="more" /></button>
              <ul className={directorToggle ? "filter-list" : "none"}>
                {directorsList?.map(director => <FilterCard option={director} handle={handleDirector} filters={directorFilter}/>)}
              </ul>
            </div>
          </div>
          <Search onSubmit={handleSearchSubmit}/>
        </div>
        <ul className="film-cards flex">
          {filmsError && <li>Try again...</li>}
          {filmsLoading && <li className="loading">Loading...</li>}
          {filteredFilms?.map((film) => <FilmCard key={film.id} film={film}/>)}
        </ul>
      </div>
    </div>
  )
}

export default Films