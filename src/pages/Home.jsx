import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"
import totoro from "../assets/home-totoro.jpeg"
import kiki from "../assets/home-kiki.jpeg"
import movingCastle from "../assets/home-moving-castle.jpeg"
import princessKaguya from "../assets/home-princess-kaguya.jpeg"
import spiritAway from "../assets/home-spirit-away.jpeg"
import arrow from "../assets/icon-arrow-right.svg"
import "../styles/Home.css"

function Home() {

  return (
    <div className="home-container">
      <Navbar className={"home"}/>
      <div className="home-content flex">
        <div className="home-description flex">
          <div className="description flex">
            <h1>Discover the best of Studio Ghibli</h1>
            <p>Remember or find out about all the fantastic stories in this universe!</p>
            <button className="home-button">
              <Link to="/films">Start now</Link>
            </button>
          </div>
          <div className="home-films flex">
            <Link to="/films">Films <img src={arrow} alt="arrow" /></Link>
            <div className="images flex">
              <img src={totoro} alt="totoro" />
              <img src={kiki} alt="kiki" />
              <img src={movingCastle} alt="moving castle" />
              <img src={princessKaguya} alt="princess Kaguya" />
            </div>
          </div>
        </div>
        <div className="home-spirit-away">
          <img src={spiritAway} alt="spirit away" />
          <p>Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals.</p>
          <button className="home-button">
            <Link to="/films/dc2e6bd1-8156-4886-adff-b39e6043af0c">Read more</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home