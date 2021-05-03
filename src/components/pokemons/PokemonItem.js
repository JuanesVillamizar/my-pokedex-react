import React, {useContext, useState} from 'react';
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";
import {PokemonContext} from "../../context/PokemonContext";
import {Link} from 'react-router-dom';

const PokemonItem = ({pokemon}) => {
    // let {abilities, types, name, moves, height, sprites} = pokemon;
    const {detailsListPokemon, setDetailsListPokemon} = useContext(PokemonContext);
    let countMoves = 0;
    let [pokemonItem, setPokemonItem] = useState({...pokemon});

    const _handleClickIncrease = () => {
        let data = [];
        detailsListPokemon.map(pokemonElement => {
            if(pokemonElement.id === pokemonItem.id){
                data.push({...pokemonItem, total: pokemonItem.total+1});
            }else{
                data.push(pokemonElement);
            }
            return null;
        });
        setPokemonItem({...pokemonItem, total: pokemonItem.total+1});
        setDetailsListPokemon(data);
    }

    const _handleClickDecrease = () => {
        if(pokemon.total !== 0){
            let data = [];
            detailsListPokemon.map(pokemonElement => {
                if(pokemonElement.id === pokemonItem.id){
                    data.push({...pokemonItem, total: pokemonItem.total-1});
                }else{
                    data.push(pokemonElement);
                }
                return null;
            });
            setPokemonItem({...pokemonItem, total: pokemonItem.total-1});
            setDetailsListPokemon(data);
        }
    }

    let attributes = {
        poison: 'Veneno',
        grass: 'Hierba',
        fire: 'Fuego',
        water: 'Agua',
        flying: 'Volador',
        electric: 'Electrico',
        bug: 'Insecto',
        ground: 'Tierra',
        psychic: 'Psíquico',
        normal: 'Normal',
        fighting: 'Lucha',
        steel: 'Acero',
        ice: 'Hielo',
        rock: 'Roca',
        dark: 'Oscuridad',
        fairy: 'Hada',
        ghost: 'Fantasma',
        dragon: 'Dragon',
    };

    return (
        <div className='row m-1 p-1 w-100 ' style={{backgroundColor: '#f0f0f0', borderRadius: 10}}>
            <div className='col-12 col-md-6 text-center text-md-left'>
                <Link to={`/pokemon/${pokemonItem.name}`}>
                    <img src={pokemonItem.sprites.other.dream_world.front_default ?? pokemonItem.sprites.other['official-artwork'].front_default ?? pokemonItem.sprites.front_default} alt={`Pokemon ${pokemonItem.name}`} width='200' height='250'/>
                </Link>
            </div>
            <div className='col-12 col-md-6'>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-12'>
                                <h5>Pokemon {pokemonItem.name.toUpperCase()}</h5>
                                {pokemonItem.types.map((type, index) => {
                                    return <p key={index} className='text-capitalize'>{attributes[type.type.name]}</p>
                                })}
                                <p className='text-muted'>Con una altura de {pokemonItem.height}</p>
                                <p className='text-muted'>Con un peso de {pokemonItem.weight}</p>
                            </div>
                            <div className="col-12">
                                <div className='row justify-content-center'>
                                    <AiFillMinusCircle className='text-danger w-25' onClick={_handleClickDecrease} style={{cursor: 'pointer'}}/>
                                    <p style={{marginTop: -5}}>{pokemonItem.total}</p>
                                    <AiFillPlusCircle className='text-success w-25' onClick={_handleClickIncrease} style={{cursor: 'pointer'}}/>
                                </div>
                                <div className='row justify-content-center'>
                                    <p>El valor es {pokemonItem.total * pokemonItem.value}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <h5>Las habilidades son: </h5>
                        {pokemonItem.abilities.map((ability, index) => {
                            return <p className='text-capitalize' key={index}>{ability.ability.name}</p>
                        })}
                        <h5>Estos son algunos de sus movimientos:</h5>
                        <p>{pokemonItem.moves.map((move, index) => {
                            let text = '';
                            if(countMoves < 10){
                                text = `${move.move.name}, `;
                            }else if(countMoves === 10){
                                text = move.move.name;
                            }else{
                                return null;
                            }
                            countMoves++;
                            return <span key={index}>{text}</span>;
                        })}...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonItem;