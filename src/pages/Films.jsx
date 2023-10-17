import { useState } from "react"
import { getFilms } from "../services/services.js"
import Navbar from "../components/Navbar.jsx"
import FilmCard from "../components/FilmCard.jsx"
import Search from "../components/Search.jsx"
import FilterCard from "../components/FilterCard.jsx"
import filmsbanner from "../assets/films-banner.png"

function addingDirectors(films){
  let directors = []
  films?.map((film) => {
    if (!directors.includes(film.director)){
        directors.push(film.director)
      }
  })
  return directors
}

function initialFilms(films, filmsList, condition){
  if (filmsList.length == 0 & !condition) return films;
  return filmsList
}

function filterFilms(films, filters){
  if (filters.length === 0) return films;
  return films.filter(film => directorFilter.includes(film.director))
}

function Films(){
  const { films, filmsLoading, filmsError } = getFilms()
  // const filters = ["locations", "release_date", "director"]
  const [searchedFilms, setSearchedFilms] = useState([])
  const [directorFilter, setDirectorFilter] = useState([])
  const [isName, setIsName] = useState(false)
  let nameUpper = ""

  const directorsList = addingDirectors(films)
  const filmsList = initialFilms(films, searchedFilms, isName)
  const filteredFilms = filterFilms(filmsList, directorFilter)

  function handleSearchSubmit(name){
    setIsName(true)
    nameUpper = name.toUpperCase()
    const filmsFiltered = films.filter((film) => film.title.toUpperCase().includes(nameUpper))
    setSearchedFilms(filmsFiltered)
  }
  
  function handleCheck(e){
    const director = e.target.name;
    const isChecked = e.target.checked;
  
    if (isChecked) {
      setDirectorFilter([...directorFilter, director]);
    } else {
      setDirectorFilter(directorFilter.filter(name => name != director))
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
          <p>Director</p>
          {directorsList?.map((director) => (
            <label key={director}>
              <input 
                type="checkbox" 
                name={director}
                onChange={handleCheck}
                checked={directorFilter.includes(director)}
              />
              {director}
            </label>
          ))}
          {/* {filters.map((filter) => <FilterCard key={filter} option={filter}/>)} */}
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