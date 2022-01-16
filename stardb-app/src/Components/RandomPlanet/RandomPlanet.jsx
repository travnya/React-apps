import React, {Component} from 'react';
import SwapiService from '../../Services/swapi-service'
import './RandomPlanet.css'

export default class RandomPlanet extends Component {
    render() {
        return (
            <div className='random-planet-wrapper'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg' />
                <ul className='rndplanet'>
                    <p>Some Planet</p>
                    <hr/>
                    <li>Rotation Period: 24</li>
                    <hr/>
                    <li>Diameter: 154 km</li>
                    <hr/>
                    <li>Population: 12</li>
                </ul>
            </div>
        );
    }
}