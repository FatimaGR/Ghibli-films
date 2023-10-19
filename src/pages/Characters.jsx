import { useState } from "react"
import { getCharacters, getSpecies, getFilms } from "../services/services.js"
import { initialData, gettingGender, filterCharacters } from "../utils/utils.jsx"
import Navbar from "../components/Navbar.jsx"
import Search from "../components/Search.jsx"
import CharacterCard from "../components/CharacterCard.jsx"
import FilterCard from "../components/FilterCard.jsx"
import charactersbanner from "../assets/characters-banner.png"

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
    <>
      <Navbar/>
      <h3>Characters</h3>
      <img src={charactersbanner} alt="characters banner" />
      <div>
        <p>Filter by: </p>
        <div>
          <p>Filters</p>
          <p>Films</p>
          {films?.map((film) => (
            <label key={film.title}>
              <input 
                type="checkbox" 
                name={film.title}
                onChange={handleFilm}
                checked={filmFilter.includes(film.title)}
              />
              {film.title}
            </label>
          ))}
          <br />
          <p>Genders</p>
          {gendersList?.map((gender) => (
            <label key={gender}>
              <input 
                type="checkbox" 
                name={gender}
                onChange={handleGender}
                checked={genderFilter.includes(gender)}
              />
              {gender}
            </label>
          ))}
          <br />
          <p>Species</p>
          {species?.map((specie) => (
            <label key={specie.name}>
              <input 
                type="checkbox" 
                name={specie.name}
                onChange={handleSpecie}
                checked={specieFilter.includes(specie.name)}
              />
              {specie.name}
            </label>
          ))}
          <br />
        </div>
        <Search onSubmit={handleSearchSubmit}/>
      </div>
      <ul>
        {charactersError && <li>Try again...</li>}
        {charactersLoading && <li>Loading...</li>}
        {filteredCharacters?.map((character) => <CharacterCard key={character.id} character={character}/>)}
      </ul>
    </>
  )
}

export default Characters