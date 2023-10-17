export function gettingDirectors(films){
  let directors = []
  films?.map((film) => {
    if (!directors.includes(film.director)){
        directors.push(film.director)
      }
  })
  return directors
}

export function gettingYears(films){
  let years = []
  films?.map((film) => {
    if (!years.includes(film.release_date)){
        years.push(film.release_date)
      }
  })
  return years
}

export function initialFilms(films, filmsList, condition){
  if (filmsList.length == 0 & !condition) return films;
  return filmsList
}

export function filterByDirector(films, filters){
  if (filters.length === 0) return films;
  return films.filter(film => filters.includes(film.director))
}

export function filterByYear(films, filters){
  if (filters.length === 0) return films;
  return films.filter(film => filters.includes(film.release_date))
}

export function addingLocations(id, locations){
  let name = ""
  let locationsList = []
  locations?.map((location) => {
    name = gettingValues(location, id)
    if (!locationsList.includes(name) & name != ""){
      locationsList.push(name)
    }
    return locationsList
  })
  return(locationsList)
}

export function gettingValues(array, id, separation, newArray){
  let name = ""
  array.films.map((element) => {
    const filmId = element.split("https://ghibliapi.vercel.app/films/")[1]
    if (filmId === id) {
      separation ? name = array?.name + ", " : name = array?.name
      return name 
    } else {
      newArray ? newArray.push(array) : ""
    }
  })
  return name
}

export function gettingValue(mapList, endpoint, findList, toSearch) {
  let findedElement = ""
  if (!mapList) {
    const elementId = toSearch.split("https://ghibliapi.vercel.app/" + endpoint)[1]
    findedElement = findList?.find((element) => element?.id === elementId)
    return(findedElement)
  }
  mapList?.map((element) => {
    const elementId = element.split("https://ghibliapi.vercel.app/" + endpoint)[1]
    findedElement = findList?.find((element) => element?.id === elementId)
    return(findedElement)
  })
  return(findedElement)
}

export function filterByLocation(films, locations, filters){
  if (filters.length === 0) return films;
  return films.filter((film) => 
    addingLocations(film.id, locations)?.some((location) => filters.includes(location))
  )
}

export function filterFilms(films, director, year, locations, location){
  const filmsByDirector = filterByDirector(films, director);
  const filmsByYear = filterByYear(filmsByDirector, year);
  const filmsByLocation = filterByLocation(filmsByYear, locations, location)

  return filmsByLocation
}