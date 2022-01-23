import './PersonDetails.css'
import React, { Component } from 'react'
import SwapiService from '../../Services/swapi-service'

export default class PersonDetails extends Component {
   
    swapiService = new SwapiService()

    state = {
        person: {}
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson()
        }
    }

    updatePerson() {
        
        const { personId } = this.props

        if (!personId) {
            return
        }

        this.swapiService
        .getPerson(personId)
        .then((person) => {
            this.setState({ person })
        })
    }

    render() {

        const { id, name, gender, birthYear, eyeColor } = this.state.person

        if (!id) { 
            return ( 
                <div className='change-hint-box'>
                    <span className='change-hint'>Select a person to see a full information</span>
                </div>
            )
        }
        return (
            <div className='person-details-wrapper'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt='character' />
                <ul className='person-details-list'>
                    <h4>{name}</h4>
                    <li className='detail-item'>Gender: {gender}</li>
                    <li className='detail-item'>Birth Year: {birthYear}</li>
                    <li className='detail-item'>Eye color: {eyeColor}</li>
                </ul>
            </div>
        )
    }
}
