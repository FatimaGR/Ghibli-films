import { useFetch } from "./useFetch.js"

export function getFilms(){
  const {data, loading, error} = useFetch("/films")
  const films = data
  const filmsLoading = loading
  const filmsError = error
  return {films, filmsLoading, filmsError}
}

export function getFilmById(id){
  const {data, loading, error} = useFetch(`/films/${id}`)
  const film = data
  const filmLoading = loading
  const filmError = error
  return {film, filmLoading, filmError}
}

export function getCharacters(){
  const {data, loading, error} = useFetch("/people")
  const characters = data
  const charactersLoading = loading
  const charactersError = error
  return {characters, charactersLoading, charactersError}
}

export function getLocations(){
  const {data, loading, error} = useFetch("/locations")
  const locations = data
  const locationsLoading = loading
  const locationsError = error
  return {locations, locationsLoading, locationsError}
}

export function getSpecies(){
  const {data, loading, error} = useFetch("/species")
  const species = data
  const speciesLoading = loading
  const speciesError = error
  return {species, speciesLoading, speciesError}
}