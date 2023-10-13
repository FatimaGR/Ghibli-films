import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Films from "./pages/Films.jsx"
import Film from "./pages/Film.jsx"
import Characters from "./pages/Characters.jsx"
import Locations from "./pages/Locations.jsx"
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/films" element={<Films />}/>
        <Route path="/films/:id" element={<Film />}/>
        <Route path="/characters" element={<Characters />}/>
        <Route path="/locations" element={<Locations />}/>
      </Routes>
    </>
  )
}

export default App
