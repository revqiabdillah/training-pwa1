import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Signin from './pages/Sigin'
import ListBrand from './pages/Listbrand'
import Countries from './pages/Countries'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/list-brand">
          <ListBrand />
        </Route>
        <Route path="/countries">
          <Countries />
        </Route>
        <Route path="/">
          <Signin />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
