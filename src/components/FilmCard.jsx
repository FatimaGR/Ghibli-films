import { Link } from "react-router-dom";
import "../styles/Films.css"

function FilmCard({film}){
  return(
    <div className="film-card" key={film.id}>
      <img src={film?.image} alt={film?.title} />
      <Link to={`/films/${film?.id}`}>{film?.title}</Link>
      <h6>{film?.original_title}</h6>
    </div>
  )
}

export default FilmCard