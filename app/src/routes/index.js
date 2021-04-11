import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dialog from '../pages/Dialog';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dialog" component={Dialog} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
