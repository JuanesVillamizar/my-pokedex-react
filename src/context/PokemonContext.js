import React, {useEffect, useState} from 'react';

const PokemonContext =  React.createContext([]);
const {Provider} = PokemonContext;

const PokemonProvider = ({children}) => {
    let [detailsListPokemon, setDetailsListPokemon] = useState([]);
    let [pokemonSearch, setPokemonSearch] = useState('');
    const [types] = useState([
        {type: 'poison', spanish: 'Veneno', color: '#a741f8'},
        {type: 'grass', spanish: 'Hierba', color: '#9ac79c'},
        {type: 'fire', spanish: 'Fuego', color: '#e28569'},
        {type: 'water', spanish: 'Agua', color: '#82c3ff'},
        {type: 'flying', spanish: 'Volador', color: '#67b6ff'},
        {type: 'electric', spanish: 'Electrico', color: '#ffe85b'},
        {type: 'bug', spanish: 'Insecto', color: '#a0cf64'},
        {type: 'ground', spanish: 'Tierra', color: '#eeb84f'},
        {type: 'psychic', spanish: 'Psíquico', color: '#fd92b9'},
        {type: 'normal', spanish: 'Normal', color: '#ccd9e5'},
        {type: 'fighting', spanish: 'Lucha', color: '#d6513e'},
        {type: 'steel', spanish: 'Acero', color: '#9e9e9e'},
        {type: 'ice', spanish: 'Hielo', color: '#bfe0ff'},
        {type: 'rock', spanish: 'Roca', color: '#c0ac64'},
        {type: 'dark', spanish: 'Oscuridad', color: '#413636'},
        {type: 'fairy', spanish: 'Hada', color: '#ecd0f9'},
        {type: 'ghost', spanish: 'Fantasma', color: '#2d3578'},
        {type: 'dragon', spanish: 'Dragon', color: '#8065f0'},

    ]);

    const intervalsPokemon = (count) => {
        return detailsListPokemon.slice(0, count);
    }

    const getListPokemonCount = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=1`);
        const data = await response.json();
        return data.count;
    }

    const getPokemonByUrl = async (url) => {
        const response = await fetch(url);
        return await response.json();
    }

    const getListPokemonWithOutDetails = async () => {
        let count = await getListPokemonCount();
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=0`;
        const response = await fetch(url);
        const listData = await response.json();
        return listData.results;
    }

    useEffect(() => {
        const getListPokemon = async () => {
            let listPokemonWithOutDetails = await getListPokemonWithOutDetails();
            let listPokemon = [];
            for(const element of listPokemonWithOutDetails){
                let url = element.url;
                let pokemon = await getPokemonByUrl(url);
                pokemon.value = 1_000_000;
                pokemon.total = 0;
                listPokemon.push(pokemon);
                setDetailsListPokemon(listPokemon);
            }
        }
        getListPokemon();
    }, []);

    const getListPokemonByType = (type) => {
        const data = [];
        detailsListPokemon.map(pokemon => {
            let item = pokemon.types.filter(element => {
                return element.type.name.includes(type)
            });
            item.length !== 0 && data.push(pokemon);
            return null;
        });
        return data;
    }

    const startSearchPokemon = (element) => {
        let data = [];
        detailsListPokemon.map(pokemonItemSearch => {
            if(pokemonItemSearch.name.includes(element)){
                data.push(pokemonItemSearch);
            }
            return null;
        });
        return data;
    }

    const shoppingPokemon = () => {
        let data = [];
        detailsListPokemon.map(pokemon => {
            if(pokemon.total > 0){
                data.push(pokemon);
            }
            return null;
        });
        return data;
    }

    const getPokemonByName = (name) => {
        return detailsListPokemon.filter(pokemon => pokemon.name === name);
    }

    const emptyCar = () => {
        let data = [];
        detailsListPokemon.map(pokemon => {
            pokemon.total = 0;
            data.push(pokemon);
            return null;
        });
        setDetailsListPokemon(data);
    }

    // const startSearchPokemon = useMemo(() => {
    //     return detailsListPokemon.filter(pokemon => pokemon.name.includes(pokemonSearch));
    // }, []);

    return (
        <Provider value={
            {
                detailsListPokemon,
                setDetailsListPokemon,
                intervalsPokemon,
                pokemonSearch,
                setPokemonSearch,
                getListPokemonByType,
                types,
                startSearchPokemon,
                emptyCar,
                shoppingPokemon,
                getPokemonByName
            }
        }>
            {children}
        </Provider>
    );
}
export {PokemonProvider, PokemonContext};