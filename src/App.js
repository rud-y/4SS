import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import Round from "./components/Round.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Round name="360degrees" />
      </div>
    );
  }
}

export default App;
