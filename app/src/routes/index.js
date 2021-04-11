import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dialog from '../pages/Dialog';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dialog" exact component={Dialog} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;