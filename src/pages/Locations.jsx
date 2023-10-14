import { Link } from "react-router-dom";
import { getFilms, getCharacters, getLocations } from "../services/services.js"
import Navbar from "../components/Navbar.jsx"
import LocationCard from "../components/LocationCard.jsx";
import locationsbanner from "../assets/locations-banner.png"
import FilterCard from "../components/FilterCard.jsx"
import Search from "../components/Search.jsx"

function Locations(){
  const { locations } = getLocations()
  const filters = ["films", "climate", "terrain"]

  return(
    <>
      <Navbar/>
      <h1>Locations</h1>
      <img src={locationsbanner} alt="locations banner" />
      <div>
        <p>Filter by: </p>
        <div>
          <p>Filters</p>
          {filters.map((filter) => <FilterCard key={filter} option={filter}/>)}
        </div>
        <Search/>
      </div>
      <ul>
        <p>Locations</p>
        {locations?.map((location) => <LocationCard key={location.id} location={location}/>)}
      </ul>
    </>
  )
}

export default Locations