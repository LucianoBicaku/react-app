import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import Photos from "./pages/Photos";
import PhotoIndex from "./pages/PhotoIndex";
const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/photos/:id" component={PhotoIndex} />
        <Route path="/photos" component={Photos} />

        <Route>{/* <NoMatch /> */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
