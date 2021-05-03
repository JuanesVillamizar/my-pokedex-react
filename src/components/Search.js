import React, {useState, useEffect, useContext, useRef} from 'react';
import {Link} from 'react-router-dom';
import {PokemonContext} from '../context/PokemonContext';
const levenshtein = require('js-levenshtein');

const Search = ({filterPokemon}) => {
    const {detailsListPokemon, setPokemonSearch, } = useContext(PokemonContext);
    const [search, setSearch] = useState('');
    const [elementSearch, setElementSearch] = useState([]);
    const searchInput = useRef(null);

    const _handleChange = () => {
        setSearch(searchInput.current.value.toLowerCase());
        // setPokemonSearch(searchInput.current.value.toLowerCase());
        filterPokemon(searchInput.current.value.toLowerCase());
    }

    useEffect(() => {
        if(search.length >= 3){
            let data = [];
            detailsListPokemon.map((element) => {
                if(element.name.indexOf(search) >= 0){
                    data.push(element);
                }
                return null;
            });
            if(data.length > 0){
                setElementSearch(data)
            }else{
                detailsListPokemon.map((pokemon) => {
                    if(levenshtein(pokemon.name, search) <= 3 ){
                        data.push(pokemon);
                    }
                    return null;
                });
            }
        }else{
            if(search.length <= 3){
                setElementSearch([]);
            }
        }
    }, [search,detailsListPokemon]);

    const _handleClick = () => {
        setPokemonSearch(elementSearch);
    }

    const btnSearch = () => {
        return (
            <Link to='/search' className='btn btn-outline-success' onClick={_handleClick}>Buscar</Link>
        );
    }

    return (
        <div className='row my-3 justify-content-center'>
            <div className="col-12 col-md-5">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" ref={searchInput} value={search} placeholder='Buscar' aria-label="Search" aria-describedby="Search" onChange={_handleChange}/>
                    {search.length >= 3 && btnSearch()}
                </div>
            </div>
        </div>
    );
}

export default Search;