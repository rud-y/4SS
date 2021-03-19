import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Places from "./components/Places";
import Gallery from "./components/Gallery";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/places" component={Places} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
