import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Round from './Round.jsx';
import '../styles/HomePage.css';


class HomePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="homepage">
                <NavBar />
                <Round name="Jump in!" />
            </div>
        )
    }
}

export default HomePage;