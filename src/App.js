import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Landing from './components/Landing';
import Forum from './components/Forum';
import Settings from './components/Settings';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  // need to move this out into its own file
  const [users, setUsers] = useState([
    {   
        "id":"0",
        "name":"john",
        "email":"john@email.com",
        "password":"pass",
        "dateofjoining":"18 August 2022"
    },
    {   
      "id":"1",
      "name":"doe",
      "email":"doe@email.com",
      "password":"pass",
      "dateofjoining":"17 August 2022"
  },
  ]);

  return (
    <Router>
        <Switch>
          <Route exact path={"/"} >
            <PrivateRoute />
          </Route>
          <Route exact path={"/landing"} >
            <Landing users={users} />
          </Route>
          <Route exact path={"/forum"} >
            <Forum users={users}/>
          </Route>
          <Route exact path={"/settings"} >
            <Settings users={users} setUsers={setUsers}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
