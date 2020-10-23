import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core';
import {Carrinho, ListaDeProdutos} from './pages';
import {theme} from './styles/theme';
import './styles/index.css';

function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path='/carrinho' component={Carrinho} />
          <Route path='/' component={ListaDeProdutos} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
