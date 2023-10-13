import { getFilms } from "../services/services.js"
import Navbar from "../components/Navbar.jsx"
import FilmCard from "../components/FilmCard.jsx"
import Search from "../components/Search.jsx"
import FilterCard from "../components/FilterCard.jsx"
import filmsbanner from "../assets/films-banner.png"

function Films(){
  const { films, filmsLoading, filmsError } = getFilms()
  const filters = ["locations", "release_date", "director"]

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
          {filters.map((filter) => <FilterCard key={filter} option={filter}/>)}
        </div>
        <Search/>
      </div>
      <ul>
        {filmsError && <li>Try again...</li>}
        {filmsLoading && <li>Loading...</li>}
        {films?.map((film) => <FilmCard key={film.id} film={film}/>)}
      </ul>
    </>
  )
}

export default Films