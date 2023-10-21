import { useState } from "react"
import { getCharacters, getSpecies, getFilms } from "../services/services.js"
import { initialData, gettingGender, filterCharacters } from "../utils/utils.jsx"
import Navbar from "../components/Navbar.jsx"
import Search from "../components/Search.jsx"
import CharacterCard from "../components/CharacterCard.jsx"
import FilterCard from "../components/FilterCard.jsx"
import charactersbanner from "../assets/characters-banner.png"
import arrow from "../assets/icon-arrow-bottom.svg"
import "../styles/Characters.css"

function Characters(){
  const { characters, charactersError, charactersLoading } = getCharacters()
  const { species } = getSpecies()
  const { films } = getFilms()
  const [searchedCharacters, setSearchedCharacters] = useState([])
  const [genderFilter, setGenderFilter] = useState([])
  const [filmFilter, setFilmFilter] = useState([])
  const [specieFilter, setSpecieFilter] = useState([])
  const [isName, setIsName] = useState(false)
  let nameUpper = ""

  const gendersList = gettingGender(characters)
  const charactersList = initialData(characters, searchedCharacters, isName)
  const filteredCharacters = filterCharacters(charactersList, genderFilter, films, filmFilter, specieFilter, species)
  
  function handleSearchSubmit(name){
    setIsName(true)
    nameUpper = name.toUpperCase()
    const charactersFiltered = characters.filter((character) => character.name.toUpperCase().includes(nameUpper))
    setSearchedCharacters(charactersFiltered)
  }

  function handleFilm(e){
    const film = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      setFilmFilter([...filmFilter, film]);
    } else {
      setFilmFilter(filmFilter.filter((name)=> name !== film));
    }
  }

  function handleGender(e){
    const gender = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      setGenderFilter([...genderFilter, gender]);
    } else {
      setGenderFilter(genderFilter.filter((name)=> name !== gender));
    }
  }

  function handleSpecie(e){
    const specie = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      setSpecieFilter([...specieFilter, specie]);
    } else {
      setSpecieFilter(specieFilter.filter((name)=> name !== specie));
    }
  }

  return(
    <div className='characters-container'>
      <Navbar/>
      <div className="characters-content">
        <h2>Characters</h2>
        <img className="characters-banner" src={charactersbanner} alt="characters banner" />
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
              <button className="filter-button">Gender <img src={arrow} alt="more" /></button>
              <ul className="filter-list">
                {gendersList?.map(gender => <FilterCard option={gender} handle={handleGender} filters={genderFilter}/>)}
              </ul>
            </div>
            <div className="filter-container">
              <button className="filter-button">Specie <img src={arrow} alt="more" /></button>
              <ul className="filter-list">
                {species?.map(specie => <FilterCard option={specie.name} handle={handleSpecie} filters={specieFilter}/>)}
              </ul>
            </div>
          </div>
          <Search onSubmit={handleSearchSubmit}/>
        </div>
        <ul className="character-cards">
          {charactersError && <li>Try again...</li>}
          {charactersLoading && <li className="loading">Loading...</li>}
          {filteredCharacters?.map((character) => <CharacterCard key={character.id} character={character}/>)}
        </ul>
      </div>
    </div>
  )
}

export default Characters