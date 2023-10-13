import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"

function Home() {

  return (
    <>
      <Navbar/>
      <div>
        <div className='home-description'>
          <h1>Discover the best of Studio Ghibli</h1>
          <p>Remember or find out about all the fantastic stories in this universe!</p>
          <button className='home-button'>
            <Link to="/films">Start now</Link>
          </button>
          <div>
            <h6>Films -</h6>
            <div>
              <p>image</p>
              <p>image</p>
              <p>image</p>
              <p>image</p>
            </div>
          </div>
        </div>
        <div>
          <p>image</p>
          <p>Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals.</p>
          <button>
            <Link to="/films/dc2e6bd1-8156-4886-adff-b39e6043af0c">Read more</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Home