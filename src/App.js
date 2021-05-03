import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './components/generals/Layout';
import Start from './pages/Start';
import Types from './pages/Types';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import ShoppingCar from './pages/ShoppingCar';
import PokemonElement from './components/pokemons/PokemonElement';
import './App.css';

const App = () => {
  return (
      <div className='container pb-5 pt-2'>
          <Router>
              <Layout>
                  <Switch>
                      <Route exact path='/' component={Start}/>
                      <Route path='/search' component={Search}/>
                      <Route path='/types' component={Types}/>
                      <Route path='/shoppingCar' component={ShoppingCar}/>
                      <Route path='/pokemon/:pokemon' component={PokemonElement}/>
                      <Route component={NotFound}/>
                  </Switch>
              </Layout>
          </Router>
      </div>
  );
}

export default App;
