import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Albuns from './pages/Albuns';
import Erro from './pages/Erro';
import Fotos from './pages/Fotos';
import Home from './pages/Home';
import Usuarios from './pages/Usuario';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/usuarios/:id" component={Usuarios} />
        <Route exact path="/albuns/" component={Albuns} />
        <Route exact path="/fotos/:id" component={Fotos} />
        <Route exact path="/usuarios/" component={Usuarios} />
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
