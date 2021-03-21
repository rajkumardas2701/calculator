import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from '../layouts/Home';
import Quote from '../layouts/Quote';
import NotFound from '../layouts/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/quote" component={Quote} />
      <Route exact path="/calculator" component={App} />
      <Route exact component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
