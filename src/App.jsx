import './App.css'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Pokemons = lazy(() => import('./routes/Pokemons'))
const FindPokemon = lazy(() => import('./routes/FindPokemon'))
const Prueba = lazy(() => import('./routes/Prueba'))
const Navbar = lazy(() => import('./components/Navbar'))

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Navbar />}>
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/findpokemon" element={<FindPokemon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
