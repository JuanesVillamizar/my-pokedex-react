import React, {useContext, useState} from 'react';
import {useParams} from 'react-router-dom';
import {PokemonContext} from "../../context/PokemonContext";

const PokemonElement = () => {
    const {getPokemonByName, types} = useContext(PokemonContext);
    const {pokemon} = useParams();
    const [pokemonDetail] = useState(getPokemonByName(pokemon)[0]);
    let attributes = [
        {poison: 'Veneno',color: '#a741f8', type: 'poison'},
        {grass: 'Hierba',color: '#9ac79c', type: 'grass'},
        {fire: 'Fuego',color: '#e28569', type: 'fire'},
        {water: 'Agua',color: '#82c3ff', type: 'water'},
        {flying: 'Volador',color: '#67b6ff', type: 'flying'},
        {electric: 'Electrico',color: '#ffe85b', type: 'electric'},
        {bug: 'Insecto',color: '#a0cf64', type: 'bug'},
        {ground: 'Tierra',color: '#eeb84f', type: 'ground'},
        {psychic: 'Psíquico',color: '#fd92b9', type: 'psychic'},
        {normal: 'Normal',color: '#ccd9e5', type: 'normal'},
        {fighting: 'Lucha',color: '#d6513e', type: 'fighting'},
        {steel: 'Acero',color: '#9e9e9e', type: 'steel'},
        {ice: 'Hielo',color: '#bfe0ff', type: 'ice'},
        {rock: 'Roca',color: '#c0ac64', type: 'rock'},
        {dark: 'Oscuridad',color: '#413636', type: 'dark'},
        {fairy: 'Hada',color: '#ecd0f9', type: 'fairy'},
        {ghost: 'Fantasma',color: '#2d3578', type: 'ghost'},
        {dragon: 'Dragon',color: '#8065f0', type:'dragon'}
    ];
    if(pokemonDetail === [] || pokemonDetail === undefined){
        return (
            <div className='row'>
                <div className='col-12 text-center'>
                    <h3>Este pokemon {pokemon} no lo hemos encontrado</h3>
                </div>
            </div>
        );
    }
    return (
        <div className='row my-2 w-100 bg-dark' style={{borderRadius: 15}}>
            <div className='col-12 text-center text-success'>
                <h3>{pokemonDetail.name.toUpperCase()}</h3>
            </div>
            <div className='col-12 text-center'>
                <img src={pokemonDetail.sprites.other.dream_world.front_default ?? pokemonDetail.sprites.other['official-artwork'].front_default ?? pokemonDetail.sprites.front_default} alt={`Pokemon ${pokemonDetail.name}`} width='350' height='350'/>
            </div>
            <div className='col-12 py-3'>
                <div className='row justify-content-around my-3'>
                    {
                        pokemonDetail.types.map( (type, index) =>{
                            let color = types.filter((elementType) => {
                                return elementType.type === type.type.name ? elementType : null;
                            })[0];
                            return (
                                <div key={index} style={{backgroundColor: color.color, borderRadius: 100, width: 100, height: 100}}>

                                </div>
                            );
                        })
                    }
                </div>
                <div style={{backgroundColor: '#f0f0f0', height: 3, width: '100%'}}>

                </div>
            </div>
            <div className='col-12 text-light'>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-12'>
                                <h5>Detalles:</h5>
                                {pokemonDetail.types.map((type, index) => {
                                    return <p key={index} className='text-capitalize'>{attributes[type.type.name]}</p>
                                })}
                                <p>Con una altura de {pokemonDetail.height}</p>
                                <p>Con un peso de {pokemonDetail.weight}</p>
                                <p>El valor es {pokemonDetail.value} por unidad</p>
                                <h5>Las habilidades son: </h5>
                                {pokemonDetail.abilities.map((ability, index) => {
                                    return <p className='text-capitalize' key={index}>{ability.ability.name}</p>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <h5>Estos son algunos de sus movimientos:</h5>
                        <p>{pokemonDetail.moves.map((move, index) => {
                            return <span key={index}>{move.move.name},</span>;
                        })}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonElement;