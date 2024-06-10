import './PokemonAPI.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css';

function PokemonAPI() {
    const [pokemon, setPokemon] = useState(null);
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
                setLoading(false);
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
        <div className="card animate__animated animate__fadeInUp">
            <div className="row g-0 bg-dark rounded-1 border border-2 border-dark">
                <div className="col-md-4 col-sm-12 bg-danger rounded-end-0 rounded-1 d-flex justify-content-center align-items-center">
                    <a href={`https://www.pokemon.com/es/pokedex/${pokemon.id}`} target="_blank" rel="noreferrer" className="d-flex justify-content-center align-items-center">
                        <img src={pokemon.sprites.other['official-artwork'].front_default} className="img-fluid rounded-start   " alt="Imagen Pokemon"/>
                    </a>
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                        <div className="card-text text-center">
                            <small className="text-white">Tipo: {pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}{pokemon.types[1] ? `, ${pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1)}` : ''}</small><br/>                         
                            <small className="text-white">Peso: {pokemon.weight/10} kg</small><br/>
                            <small className="text-white">Altura: {pokemon.height/10} m</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonAPI;
