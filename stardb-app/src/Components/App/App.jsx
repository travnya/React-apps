import React, {Component} from 'react';
import './App.css'
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';

export default class App extends Component {

    state = {
        selectedPerson: 0
    }
    
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        return (
            <div className='main-container'>
                <Header />
                <RandomPlanet />
                <div className='wrapper'>
                    <ItemList onItemSelected={this.onPersonSelected}/>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        );
    }
}