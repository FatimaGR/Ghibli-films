import { Link } from "react-router-dom";

function Navbar({ className }) {

  return (
    <ul className={className ? "navbar" : "navbar navbar-no-home"}>
      <li> <Link to="/">Home</Link> </li>
      <li> <Link to="/films">Films</Link> </li>
      <li> <Link to="/characters">Characters</Link> </li>
      <li> <Link to="/locations">Locations</Link> </li>
    </ul>
  )
}

export default Navbar