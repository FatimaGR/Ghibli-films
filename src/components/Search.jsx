import { useState } from "react"

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
    <form onSubmit={handleSubmit}>
      <button action="submit">lupita</button>
      <input type="text" value={word} id="search" onChange={handleWordChange}/>
    </form>
  )
}

export default Search