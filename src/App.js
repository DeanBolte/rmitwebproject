import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom"

import Landing from './components/Landing';
import Forum from './components/Forum';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path={"/"} component={Landing} />
          <Route exact path={"/forum"} component={Forum} />
          <Route exact path={"/settings"} component={Settings} />
        </Switch>
    </Router>
  );
}

export default App;
