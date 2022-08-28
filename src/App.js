import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Users from './service/users';
import Posts from './service/posts';

import Landing from './components/Landing';
import Forum from './components/Forum';
import Settings from './components/Settings';
import { PrivateRoute } from './components/PrivateRoute';


function App() {
  // push data json to localstorage, will be replaced with a database in assignment 2
  if(!localStorage.getItem("users")) {
    Users.instantiateUsers()
  }  
  if(!localStorage.getItem("posts")) {
    Posts.instantiatePosts()
  }

  return (
    <Router>
        <Switch>
          <Route exact path={"/"} >
            <PrivateRoute />
          </Route>
          <Route exact path={"/landing"} >
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
