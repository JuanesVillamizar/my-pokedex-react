import React, {useState, useContext} from 'react';
import {PokemonContext} from "../context/PokemonContext";
import Pokemon from "../components/pokemons/Pokemon";

const Types = () => {
    const {getListPokemonByType, types} = useContext(PokemonContext);
    const [list, setList] = useState([]);

    const _handleClick = (btn) => {
        setList(getListPokemonByType(btn.target.id));
    }

    return (
        <div className='container'>
            <div className='row my-2 py-2'>
                {types.map((element, index) => {
                    return (
                            <div key={index} className='col-12 col-md-4 col-lg-2'>
                                <button className='btn w-100 m-2' onClick={_handleClick.bind(this)} id={element.type} style={{backgroundColor: '#f0f0f0',border: `3px solid ${element.color}`, borderRadius: 10}}>{element.spanish}</button>
                            </div>
                        )
                    }
                )}
            </div>
            <div className='row my-2'>
                {
                    list.map((pokemon, index) => <Pokemon pokemon={pokemon} key={index} />)
                }
            </div>
        </div>
    );
}

export default Types;