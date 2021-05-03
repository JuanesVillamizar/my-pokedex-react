import React, {useState} from 'react';

const PageContext = React.createContext({startWelcome: true});
const {Provider} = PageContext;

const PageProvider = ({children}) => {
    const [pages, setPages] = useState({startWelcome: true})
    /*const [shoppingCar, setShoppingCar] = useState([]);

    const addPokemon = (pokemon) => {
        setShoppingCar([...shoppingCar, pokemon]);
    }

    const removePokemon = (name) => {
        let data = [];
        shoppingCar.filter((pokemon) => {
            if(pokemon.name !== name){
                data.push(pokemon);
            }
            return null;
        });
        setShoppingCar(data);
    }*/

    return (
        <Provider value={{pages, setPages}}>
            {children}
        </Provider>
    );

}

export {PageProvider, PageContext};