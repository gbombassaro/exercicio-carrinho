import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Carrinho, ListaDeProdutos} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/carrinho' component={Carrinho} />
        <Route path='/' component={ListaDeProdutos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
