import { useState } from "react"
import { getLocations } from "../services/services.js"
import Navbar from "../components/Navbar.jsx"
import LocationCard from "../components/LocationCard.jsx";
import locationsbanner from "../assets/locations-banner.png"
import FilterCard from "../components/FilterCard.jsx"
import Search from "../components/Search.jsx"

function Locations(){
  const { locations, locationsError, locationsLoading } = getLocations()
  const filters = ["films", "climate", "terrain"]
  const [locationsList, setLocationsList] = useState([])
  const [isName, setIsName] = useState(false)
  let nameUpper = ""

  function handleSearchSubmit(name){
    setIsName(true)
    nameUpper = name.toUpperCase()
    const locationsFiltered = locations.filter((location) => location.name.toUpperCase().includes(nameUpper))
    setLocationsList(locationsFiltered)
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
          {filters.map((filter) => <FilterCard key={filter} option={filter}/>)}
        </div>
        <Search onSubmit={handleSearchSubmit}/>
      </div>
      <ul>
        {locationsError && <li>Try again...</li>}
        {locationsLoading && <li>Loading...</li>}
        {locationsList.length == 0 & !isName ?
          locations?.map((location) => <LocationCard key={location.id} location={location}/>) : locationsList?.map((location) => <LocationCard key={location.id} location={location}/>)
        }
      </ul>
    </>
  )
}

export default Locations