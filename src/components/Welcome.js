import React, { /* useState */ } from 'react';
import generalStyles from "../styles/generalStyle.css";
//import Loading from "./generals/Loading";

const Welcome = ({displayNone}) => {
    //const [state, setState] = useState({loading: false});

    const _handleClick = () => {
        /*setState({loading: true});
        setTimeout(() => {
            displayNone(false)
        }, 5000);*/
        displayNone(false);
    }

    return (
        <div className='container-fluid' style={{position: 'relative', marginTop: 70, marginBottom: 300}}>
            <div className='row my-3 py-3 justify-content-center'>
                <div className='bg-light w-50 border-dark py-5' style={{borderRadius: 10, border: '1px solid #f0f0f0'}}>
                    <div className='col-12 text-center' style={{color: generalStyles.primaryColor}}>
                        <h3>Bienvenido a mi Pokedex</h3>
                    </div>
                    <div className='col-12 text-center text-muted'>
                        <p>Soy Juan Esteban Villamizar Sierra, desarrollador frontend del proyecto y te doy la bienvenida, espero te guste!!!</p>
                        <button className='btn btn-outline-info' onClick={_handleClick}>Mostrar todos los pokemon</button>
                        {/*state.loading ? <Loading /> : <button className='btn btn-outline-success' onClick={_handleClick}>Mostrar todos los pokemon</button>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;