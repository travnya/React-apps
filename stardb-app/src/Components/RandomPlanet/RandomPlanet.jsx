import React, {Component} from 'react'
import SwapiService from '../../Services/swapi-service'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import Spinner from '../Spinner/Spinner'
import './RandomPlanet.css'


export default class RandomPlanet extends Component {

    SwapiService = new SwapiService()

    state = {
        planet: {},
        loading: true,
    }

    constructor() {
        super()
        this.updatePlanet()
        setInterval(this.updatePlanet, 5000)
    }
    
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*17+3)
        this.SwapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
    }

    render() {

        const { planet, loading, error } = this.state

        const hasData = !(loading || error)
        
        const errorMeessage = error ? <ErrorIndicator /> : null
        const spinner = loading ? <Spinner/> : null
        const content = hasData ? <PlanetView planet={planet}/> : null

        return (
            <div className='random-planet-wrapper'>
                {errorMeessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {

    const { id, population, rotationPeriod, diameter, name } = planet

    return (
        <React.Fragment>
                <img className='rand-img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                <ul className='rndplanet'>
                    <h4>{name}</h4>
                    <li>
                        <span>Population: </span>
                        <span>{population}</span>
                    </li>
                    <li>
                        <span>Rotation Period: </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li>
                        <span>Diameter: </span>
                        <span>{diameter}</span>
                    </li>
                </ul>                

        </React.Fragment>
    )
}