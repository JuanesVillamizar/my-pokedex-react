import React, {useContext} from 'react';
import {PokemonContext} from "../context/PokemonContext";

const ListShoppingCar = ({getCount}) => {
    const {shoppingPokemon} = useContext(PokemonContext);
    let count = 0;

    return (
        <div className='row my-2' style={{height:window.screen.height - 345}}>
            <div className='col-12 text-center'>
                <h3>Lista de pokemons</h3>
            </div>
            {
                shoppingPokemon().map((pokemon, index) => {
                    if(pokemon.total > 0) {
                        count += pokemon.total;
                        return <div className='col-12' key={index}>
                            <div className='row m-2'>
                                <div className='col-12 col-md-6 text-center'>
                                    <img src={pokemon.sprites.other.dream_world.front_default ?? pokemon.sprites.other['official-artwork'].front_default ?? pokemon.sprites.front_default} alt={`Pokemon ${pokemon.name}`} width='150' height='150'/>
                                </div>
                                <div className='col-12 col-md-6 text-center'>
                                    <h4>{pokemon.name.toUpperCase()}</h4>
                                    <h5>Altura: {pokemon.height}</h5>
                                    <h5>Pesa: {pokemon.weight}</h5>
                                    <h5>Cantidad: {pokemon.total}</h5>
                                    <h5>Valor: {pokemon.value}</h5>
                                </div>
                            </div>
                        </div>
                    }
                    return null;
                })
            }
            {getCount(count)}
        </div>
    );
}

export default ListShoppingCar;