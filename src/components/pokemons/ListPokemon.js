import React, {useState, useContext, useEffect} from 'react';
import {PokemonContext} from '../../context/PokemonContext';
import Pokemon from "./Pokemon";
import Search from "../Search";

const ListPokemon = () => {
    const {intervalsPokemon, startSearchPokemon} = useContext(PokemonContext);
    const [list, setList] = useState([]);
    const [count, setCount] = useState(101);
    const [btnMore, setBtnMore] = useState(true);

    const _handleClick = () => {
        setList(intervalsPokemon(count));
        setCount(count + 101);
    }

    const _handleFilter = (element) => {
       if(element.length >= 3){
           setList(startSearchPokemon(element));
           setBtnMore(false);
       }else{
           setList(intervalsPokemon(count));
           setBtnMore(true);
       }
    }

    useEffect( () => {
        const init = () => {
            if(count === 101){
                setList(intervalsPokemon(count));
            }
        }
        init();
    }, [count, intervalsPokemon])

    return (
        <div className='row my-2 w-100'>
            <div className='col-12'>
                <Search filterPokemon={_handleFilter} />
            </div>
            {list.length !== 0 ? list.map( (pokemon, index) => <Pokemon pokemon={pokemon} key={index} /> ) : <div className='col-12 text-center'><h5>No se encontraron registros, si desea puede realizar una busqueda avanzada, dandole click en el boton buscar</h5></div>}
            <div className='col-12'>
                <div className="row justify-content-center mt-4">
                    { btnMore && <button className='col-12 col-md-4 btn btn-outline-light' onClick={_handleClick}>Mostrar mas...</button> }
                </div>
            </div>
        </div>
    );
}

export default ListPokemon;