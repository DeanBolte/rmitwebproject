import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Landing from './components/Landing';
import Forum from './components/Forum';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path={"/"} >
            <Landing />
          </Route>
          <Route exact path={"/forum"} >
            <Forum />
          </Route>
          <Route exact path={"/settings"} >
            <Settings />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
