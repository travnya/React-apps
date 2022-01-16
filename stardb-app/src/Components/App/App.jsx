import React, {Component} from 'react';
import './App.css'
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";

export default class App extends Component {
    render() {
        return (
            <div className='main-container'>
                <Header />
                <RandomPlanet />
            </div>
        );
    }
}