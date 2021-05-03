import React, {useContext} from 'react';
import {PokemonContext} from "../context/PokemonContext";
import PokemonItem from "../components/pokemons/PokemonItem";
import generalStyles from "../styles/generalStyle.css";
import {Link} from 'react-router-dom';

const ShoppingCar = () => {
    const {detailsListPokemon, emptyCar, shoppingPokemon} = useContext(PokemonContext);
    let count = 0;
    let elements = 0;

    const _handleClick = () => {
        console.log('En esta aplicacion no se realizan compras :), es solo una simulacion');
        console.log(shoppingPokemon());
    }

    if(detailsListPokemon.length === 0){
        return (
            <div className='row justify-content-center'>
                <h3>En este momento no has añadido ningun pokemon al carrito</h3>
            </div>
        );
    }
    return (
        <div className='row my-2 pt-2 bg-light'>
            <div className="col-12 text-center py-3">
                <h3>Estos son los pokemones que estan en el carrito</h3>
            </div>
            {detailsListPokemon.map( (pokemon, index) => {
                if(pokemon.total !== 0){
                    count++;
                    elements += pokemon.total;
                    return <PokemonItem pokemon={pokemon} key={index} totalPokemon='1' />
                }
                return null;
            })}
            <div style={{backgroundColor: generalStyles.primaryColor, height: 5, width: '100%', marginTop: 10}}>

            </div>
            <div className='col-12 bg-dark'>
                <div className='row justify-content-center mt-1'>
                    <div className='col-12 col-md-6 text-center'>
                        <h3 className='text-success'>Cantidad de pokemones: {count}</h3>
                    </div>
                    <div className='col-12 col-md-6 text-center'>
                        <h3 className='text-success'>Valor: {elements * 1_000_000}</h3>
                    </div>
                    <div className='col-12 col-md-4 text-center py-2'>
                        {count > 0 && <button className='btn btn-outline-success w-100' onClick={_handleClick}>Comprar</button>}
                    </div>
                    <div className='col-12 col-md-4 text-center py-2'>
                        {count > 0 && <button className='btn btn-outline-warning w-100' onClick={emptyCar}>Vaciar carrito</button>}
                    </div>
                    <div className='col-12 col-md-4 text-center py-2'>
                        {count > 0 && <Link to='/' className='btn btn-outline-info w-100'>Volver por mas pokemones</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShoppingCar;