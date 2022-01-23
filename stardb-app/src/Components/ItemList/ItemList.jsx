import './ItemList.css'
import React, { Component } from 'react'
import Spinner from '../Spinner/Spinner'
import SwapiService from '../../Services/swapi-service'

export default class ItemList extends Component {

    swapiService = new SwapiService()

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiService
        .getAllPeople()
        .then((peopleList) => {
            this.setState({
                peopleList
            })
        })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <div className='item'
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    <p>{name}</p>
                </div>
            )
        })
    }

    render() {

        const { peopleList } = this.state
        
        if (!peopleList) {
            return <Spinner />
        }
        
        const items = this.renderItems(peopleList)
        
        return (
            <div className='list-group-item'>
                {this.renderItems(peopleList)}
            </div>
        )
    }
}
