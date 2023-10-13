import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/films">Films</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/locations">Locations</Link>
    </div>
  )
}

export default Navbar