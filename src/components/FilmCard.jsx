import { Link } from "react-router-dom";

function FilmCard({film}){
  return(
    <div key={film.id}>
      <img src={film?.image} alt={film?.title} />
      <Link to={`/films/${film?.id}`}>{film?.title}</Link>
      <h6>{film?.original_title}</h6>
    </div>
  )
}

export default FilmCard