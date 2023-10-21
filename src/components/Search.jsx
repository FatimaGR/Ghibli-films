import { useState } from "react"
import search from "../assets/icon-search.svg"

function Search({ onSubmit }){
  const [word, setWord] = useState("");

  function handleWordChange(e){
    setWord(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    onSubmit(word)
  }

  return(
    <form onSubmit={handleSubmit} className="search-form">
      <button action="submit"><img src={search} alt="" /></button>
      <input type="text" value={word} id="search" onChange={handleWordChange} placeholder="Search..."/>
    </form>
  )
}

export default Search