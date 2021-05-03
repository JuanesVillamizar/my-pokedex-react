import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import Loading from "../generals/Loading";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import {PokemonContext} from "../../context/PokemonContext";

const Pokemon = ({pokemon}) => {
    const {detailsListPokemon, setDetailsListPokemon} = useContext(PokemonContext);
    const {name, types, sprites} = pokemon;
    const [viewImg, setViewImg] = useState(false);
    const [total, setTotal] = useState(pokemon.total)
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

    const img = () => {
        return (
            <Link to={`/pokemon/${pokemon.name}`}>
                <img
                    src={sprites.other.dream_world.front_default ?? sprites.other['official-artwork'].front_default ?? sprites.front_default}
                    alt={`Pokemon ${name}`}
                    height='150'
                    width='150'
                />
            </Link>

        );
    }

    const _handleClickIncrease = () => {
        detailsListPokemon.map(pokemonElement => {
            if(pokemonElement === pokemon){
                pokemonElement.total = pokemonElement.total++;
            }
            return null;
        });
        pokemon.total = total + 1;
        setTotal(pokemon.total);
        setDetailsListPokemon(detailsListPokemon);
    }

    const _handleClickDecrease = () => {
        if(pokemon.total !== 0){
            detailsListPokemon.map(pokemonElement => {
                if(pokemonElement === pokemon){
                    pokemonElement.total = pokemonElement.total--;
                }
                return null;
            });
            pokemon.total = total - 1;
            setTotal(pokemon.total);
            setDetailsListPokemon(detailsListPokemon);
        }
    }

    useEffect(() => {
        setTimeout(() => setViewImg(true), 1000);
    }, []);

    return (
        <div className='col-12 col-sm-6 col-lg-4 py-2'>
            <div className="container bg-light" style={{borderRadius: 10}}>
                <div className='row'>
                    <div className="col-12 col-md-6 text-center">
                        {viewImg ? img() : <Loading type='grow'/>}
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <span className='text-success'>{name.toUpperCase()}</span>
                        <br/>
                        <span className='text-dark'>Pokemon</span>
                        <br/>
                        <span className='text-info'>{
                            types.map((type, index) => {
                                return attributes[type.type.name] + (pokemon.types.length === index + 1 ? '. ': ', ')
                            })
                        }</span>
                        <div className='container'>
                            <div className='row my-2 justify-content-center'>
                                <AiFillMinusCircle className='text-danger w-25' onClick={_handleClickDecrease} style={{cursor: 'pointer'}}/>
                                <p style={{marginTop: -5}}>{pokemon.total}</p>
                                <AiFillPlusCircle className='text-success w-25' onClick={_handleClickIncrease} style={{cursor: 'pointer'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;