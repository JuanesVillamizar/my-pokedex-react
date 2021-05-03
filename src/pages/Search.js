import React, {useContext} from 'react';
import {PokemonContext} from "../context/PokemonContext";
import Pokemon from "../components/pokemons/Pokemon";

const Search = () => {
    const {pokemonSearch} = useContext(PokemonContext);
    if(pokemonSearch.length === 0){
        return (
            <div className='row justify-content-center'>
                <h3>No se encontraron pokemones con este nombre</h3>
            </div>
        );
    }
    return (
        <div className='row my-2 py-2'>
            <div className="col-12 text-center py-3">
                <h3>Estos son los pokemones con los que encontramos coincidencias exactas o similares</h3>
            </div>
            {pokemonSearch.map( (pokemon, index) => <Pokemon pokemon={pokemon} key={index} /> )}
        </div>
    );
}

export default Search;