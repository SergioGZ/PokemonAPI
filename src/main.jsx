import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './routes/App'
import FindPokemon from './routes/FindPokemon'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "pokemons",
    element: <App />,
  },
  {
    path: "findpokemon",
    element: <FindPokemon />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
