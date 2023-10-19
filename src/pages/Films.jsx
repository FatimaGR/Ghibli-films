import { useState } from "react"
import { getFilms, getLocations } from "../services/services.js"
import { gettingDirectors, gettingYears, initialData, filterFilms } from "../utils/utils.jsx"
import Navbar from "../components/Navbar.jsx"
import FilmCard from "../components/FilmCard.jsx"
import Search from "../components/Search.jsx"
import FilterCard from "../components/FilterCard.jsx"
import filmsbanner from "../assets/films-banner.png"

function Films(){
  const { films, filmsLoading, filmsError } = getFilms()
  const { locations } = getLocations()
  const [searchedFilms, setSearchedFilms] = useState([])
  const [directorFilter, setDirectorFilter] = useState([])
  const [yearFilter, setYearFilter] = useState([])
  const [locationFilter, setLocationFilter] = useState([])
  const [isName, setIsName] = useState(false)

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

  return(
    <>
      <Navbar/>
      <h3>Films</h3>
      <div>
        <img src={filmsbanner} alt="films banner" />
        <div>
          <h3>Howl's Moving Castle</h3>
          <p>ハウルの動く城</p>
          <p>When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.</p>
        </div>
      </div>
      <div>
        <p>Filter by: </p>
        <div>
          <p>Filters</p>
          <p>Locations</p>
          {locations?.map(location => <FilterCard option={location.name} handle={handleLocation} filters={locationFilter}/>)}
          <br />
          <p>Release date</p>
          {yearsList?.map(year => <FilterCard option={year} handle={handleYear} filters={yearFilter}/>)}
          <br />
          <p>Director</p>
          {directorsList?.map(director => <FilterCard option={director} handle={handleDirector} filters={directorFilter}/>)}
        </div>
        <Search onSubmit={handleSearchSubmit}/>
      </div>
      <ul>
        {filmsError && <li>Try again...</li>}
        {filmsLoading && <li>Loading...</li>}
        {filteredFilms?.map((film) => <FilmCard key={film.id} film={film}/>)}
      </ul>
    </>
  )
}

export default Films