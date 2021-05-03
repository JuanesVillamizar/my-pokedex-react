import React, {useState, useContext, useEffect} from 'react';
import {PageContext} from "../context/PagesContext";
import Welcome from '../components/Welcome';
import Loading from '../components/generals/Loading';
import ListPokemon from '../components/pokemons/ListPokemon';

const Start = () => {
    const {pages, setPages} = useContext(PageContext);
    const [view, setView] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const  displayNoneWelcome = (value) => {
        setView(value);
        setPages(false);
    }

    useEffect(() => {
        if(!pages){
            setIsLoading(false);
        }
    }, []);

    if(pages.startWelcome){
        if (view){
            return (
                <Welcome displayNone={displayNoneWelcome}/>
            );
        }
    }
    return (
        <div className='container'>
            <div className='row my-3'>
                {isLoading ? <Loading statusLoading={setIsLoading}/> : <ListPokemon />}
            </div>
        </div>
    );
}

export default Start;