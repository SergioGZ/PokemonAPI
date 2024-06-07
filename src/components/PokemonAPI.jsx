import './PokemonAPI.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonAPI() {
    const [pokemon, setPokemon] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const rand = Math.floor(Math.random() * 151) + 1;
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`);
                setPokemon(response.data);
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            }
        };

        fetchPokemon();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center my-5">
                <div className="spinner-border text-danger" role="status">
                </div>
            </div>
        );
    }

    return (
        <div className="card">
            <div className="row g-0 bg-light rounded-1">
                <div className="col-md-4 col-sm-12 bg-danger rounded-1 border border-1 border-dark d-flex justify-content-center align-items-center">
                    <a href={`https://www.pokemon.com/es/pokedex/${pokemon.id}`} target="_blank" rel="noreferrer" className="d-flex justify-content-center align-items-center">
                        <img src={pokemon.sprites.other['official-artwork'].front_default} className="img-fluid rounded-start" alt="Imagen Pokemon"/>
                    </a>
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="card-body text-center">
                        <h5 className="card-title">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                        <p className="card-text">
                            Tipo {pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Peso: {pokemon.weight} kg</small> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonAPI;
