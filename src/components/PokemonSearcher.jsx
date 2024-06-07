import axios from "axios"
import { useState } from "react"


function PokemonSearcher() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const handleInputChange = (event) => { // Handle input change
      setPokemonName(event.target.value.toLowerCase()); // Set Pokemon name to lowercase
    };
  
    const searchPokemon = () => { // Search for a Pokemon
        setLoading(true); // Display loading spinner
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
            .then((response) => {
            setPokemonData(response.data);
            setError(null); // Clear any previous errors
            })
            .catch((error) => {
            console.error(`Error fetching data: ${error}`);
            setPokemonData(null);
            setError('Pokemon no encontrado');
            })
            .finally(() => {
                setLoading(false);
            });
    };
  
    return (
      <>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="inputFinder">
              <div className="input-group mb-3 pt-5 d-flex justify-content-center align-items-center">
                <button className="btn btn-danger" type="button" id="button-addon1" onClick={searchPokemon}><strong>Buscar</strong></button>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="" 
                  value={pokemonName} 
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 d-flex justify-content-center align-items-center flex-column">
                {loading && ( <div className="spinner-border text-danger my-4" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div>
                            )}
              {error && <div className="alert alert-danger" role="alert">{error}</div>}
              {pokemonData && ( // Display Pokemon data
                <div className="card">
                  <div className="row g-0 bg-light rounded-1">
                    <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center bg-danger rounded-1 border border-1 border-dark">
                      <img src={pokemonData.sprites.other['official-artwork'].front_default} className="img-fluid rounded-start" alt="Imagen Pokemon"/>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <div className="card-body">
                        <h5 className="card-title text-center">{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h5>
                        <div className="card-text text-center">
                          <small className="list-group-item text-muted">Tipo: {pokemonData.types[0].type.name.charAt(0).toUpperCase() + pokemonData.types[0].type.name.slice(1)}{pokemonData.types[1] ? `, ${pokemonData.types[1].type.name.charAt(0).toUpperCase() + pokemonData.types[1].type.name.slice(1)}` : ''}</small>                          
                          <small className="text-muted">Peso: {pokemonData.weight/10} kg</small><br/>
                          <small className="text-muted">Altura: {pokemonData.height/10} m</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default PokemonSearcher;