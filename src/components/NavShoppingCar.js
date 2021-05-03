import React, {useContext, useState, /*useEffect*/} from 'react';
import {AiOutlineShoppingCart, AiOutlineArrowRight} from "react-icons/ai";
import ListShoppingCar from "./ListShoppingCar";
import {Link} from "react-router-dom";
import {PokemonContext} from "../context/PokemonContext";

const NavShoppingCar = () => {
    const {emptyCar, shoppingPokemon} = useContext(PokemonContext);
    const [car, setCar] = useState(true);
    const [count, setCount] = useState(0);

    const _handleClick = () => {
        setCar(!car);
    }

    const getCountPokemon = (element) => {
        setCount(element);
    }

    const _handleSales = () => {
        console.log('Esta es una simulacion de una compra :)');
        console.log(shoppingPokemon());
    }

    // useEffect(() => {
    //     return null;
    // }, [count]);

    if(car){
        return (
            <div style={{position:'fixed', right:10, top: `${(window.screen.height / 2) / 10}%`, flexDirection: 'column', zIndex:10, cursor: 'pointer', transition: 'all .5s ease'}} className='d-none d-sm-flex justify-sm-content-center' onClick={_handleClick}>
                <div className='p-2' style={{borderRadius:10, backgroundColor: '#f0f0f0', margin: '0 auto', border: '1px solid #3761a8'}}>
                    <AiOutlineShoppingCart color='#3761a8' size='2.5rem'/>
                </div>
            </div>
        );
    }
    return (
        <div className='d-none d-sm-flex row' style={{zIndex:10 ,position: 'fixed', width: 400, right: 15, backgroundColor: '#f0f0f0', border: '1px solid #3761a8', transition: 'all .5s ease', top: 0, scrollbarWidth: 5}} >
            <div className='row' style={{position: "relative"}}>
                <div className='col-12'>
                    <div className='p-2' style={{margin: '0 auto', borderBottom: '1px solid #3761a8', cursor: 'pointer'}} onClick={_handleClick}>
                        <AiOutlineArrowRight color='#3761a8' size='2rem' />
                    </div>
                </div>
                <div className='col-12' style={{zIndex: 0, overflowY: 'scroll'}}>
                    <ListShoppingCar getCount={getCountPokemon}/>
                </div>
                <div className='col-12' style={{position:"fixed", bottom:0, right:0, width:400}}>
                    <div className='row justify-content-center mt-1 bg-dark' style={count === 0 ? {height: 400} : {transition: 'all 1s ease'}}>
                        <div className='col-12 text-center'>
                            { count > 0 ? <h3 className='text-success'>Cantidad de pokemones: {count}</h3> : <h3 className='text-light'>En este momento el carrito esta vacio</h3>}
                        </div>
                        <div className='col-12 text-center'>
                            {count > 0 && <h3 className='text-success'>Valor: {count * 1_000_000}</h3>}
                        </div>
                        <div className='col-12 col-md-4 text-center py-2'>
                            {count > 0 && <button className='btn btn-outline-success w-100' onClick={_handleSales}>Comprar</button>}
                        </div>
                        <div className='col-12 col-md-4 text-center py-2'>
                            {count > 0 && <button className='btn btn-outline-warning w-100' onClick={emptyCar}>Vaciar</button>}
                        </div>
                        <div className='col-12 col-md-4 text-center py-2'>
                            {count > 0 && <Link to='/shoppingCar' className='btn btn-outline-info w-100'>Ver carrito</Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavShoppingCar;