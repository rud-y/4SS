import React, { Component } from 'react';
import NavBar from './NavBar';
import Round from './Round';
import SeasonPics from './SeasonPics';
import '../styles/HomePage.css';


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="homepage">
        <NavBar />
        <Round />
        <SeasonPics />
      </div>


    )
  }
}

export default HomePage;