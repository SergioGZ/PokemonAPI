import './App.css'
import Pokemons from './routes/Pokemons'
import FindPokemon from './routes/FindPokemon'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/findpokemon" element={<FindPokemon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
