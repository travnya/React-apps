import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <nav className='header-wrapper'>
                <p>StarWars DataBase</p>
                <ul className='nav'>
                    <a href='/people'><li>People</li></a>
                    <a href='/planets'><li>Planets</li></a>
                    <a href='/starships'><li>Starships</li></a>
                </ul>
            </nav>
        );
    }
}