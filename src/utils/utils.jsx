export function initialData(films, filmsList, condition){
  if (filmsList.length == 0 & !condition) return films;
  return filmsList
}

export function gettingDirectors(films){
  let directors = []
  films?.map((film) => {
    if (!directors.includes(film.director)){
      directors.push(film.director)
    }
  })
  return directors
}

export function gettingGender(characters){
  let genders = []
  characters?.map((character) => {
    if (!genders.includes(character.gender)){
      genders.push(character.gender)
    }
  })
  return genders
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

export function gettingLocations(id, locations){
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

export function gettingFilms(list, films){
  let name = ""
  let filmsList = []
  list?.films.map((film) => {
    name = gettingValue(false, "films/", films, film)
    if (!filmsList.includes(name.title) & name != ""){
      filmsList.push(name.title)
    }
    return filmsList
  })
  return(filmsList)
}

export function gettingSpecie(url, species){
  let name = gettingValue(false, "species/", species, url)
  return(name?.name)
}

export function gettingId(toSeparate, endpoint){
  const id = toSeparate.split("https://ghibliapi.vercel.app/" + endpoint)[1]
  return id
}

export function gettingValues(list, id, separation, newList){
  let name = ""
  list.films.map((element) => {
    const filmId = gettingId(element, "films/")
    if (filmId === id) {
      separation ? name = list?.name + separation : name = list?.name
      return name 
    } else {
      newList ? newList.push(list) : ""
    }
  })
  return name
}

export function gettingValue(mapList, endpoint, findList, toSearch) {
  let findedElement = ""
  if (!mapList) {
    const elementId = gettingId(toSearch, endpoint)
    findedElement = findList?.find((element) => element?.id === elementId)
    return(findedElement)
  }
  mapList?.map((element) => {
    const elementId = gettingId(element, endpoint)
    findedElement = findList?.find((element) => element?.id === elementId)
    return(findedElement)
  })
  return(findedElement)
}

export function filterByDirector(films, filters){
  if (filters.length === 0) return films;
  return films.filter(film => filters.includes(film.director))
}

export function filterByYear(films, filters){
  if (filters.length === 0) return films;
  return films.filter(film => filters.includes(film.release_date))
}

export function filterByLocation(films, locations, filters){
  if (filters.length === 0) return films;
  return films.filter((film) => 
    gettingLocations(film.id, locations)?.some((location) => filters.includes(location))
  )
}

export function filterFilms(films, director, year, locations, location){
  const filmsByDirector = filterByDirector(films, director);
  const filmsByYear = filterByYear(filmsByDirector, year);
  const filmsByLocation = filterByLocation(filmsByYear, locations, location)

  return filmsByLocation
}

export function filterByGender(characters, filters){
  if (filters?.length === 0) return characters;
  return characters?.filter(character => filters.includes(character.gender))
}

export function filterByFilms(characters, films, filters){
  if (filters?.length === 0) return characters;
  return characters?.filter((character) =>
    gettingFilms(character, films)?.some((film) => filters.includes(film))
  )
}

export function filterBySpecie(characters, filters, species){
  if (filters?.length === 0) return characters;
  return characters?.filter(character => 
    filters?.includes(gettingSpecie(character.species, species))
  )
}

export function filterCharacters(characters, gender, films, film, specie, species){
  const charactersByFilm = filterByFilms(characters, films, film);
  const charactersByGender = filterByGender(charactersByFilm, gender);
  const charactersBySpecie = filterBySpecie(charactersByGender, specie, species)

  return charactersBySpecie
}