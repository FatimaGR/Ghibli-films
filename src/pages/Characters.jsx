import { getCharacters } from "../services/services.js"
import Navbar from "../components/Navbar.jsx"
import Search from "../components/Search.jsx"
import CharacterCard from "../components/CharacterCard.jsx"
import FilterCard from "../components/FilterCard.jsx"
import charactersbanner from "../assets/characters-banner.png"

function Characters(){
  const { characters, charactersError, charactersLoading } = getCharacters()
  const filters = ["films", "gender", "species"]

  return(
    <>
      <Navbar/>
      <h3>Films</h3>
      <img src={charactersbanner} alt="characters banner" />
      <div>
        <p>Filter by: </p>
        <div>
          <p>Filters</p>
          {filters.map((filter) => <FilterCard key={filter} option={filter}/>)}
        </div>
        <Search/>
      </div>
      <ul>
        {charactersError && <li>Try again...</li>}
        {charactersLoading && <li>Loading...</li>}
        {characters?.map((character) => <CharacterCard key={character.id} character={character}/>)}
      </ul>
    </>
  )
}

export default Characters