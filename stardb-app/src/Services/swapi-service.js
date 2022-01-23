import {Component} from "react";

export default class SwapiService extends Component{

    _apiBase = 'https://swapi.dev/api/'

    async getRes(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}`)
        }
        return await res.json()
    }

    async getAllPeople() {
        const res = await this.getRes(`people/`)
        return res.results.map(this._transformPerson)
    }

    async getPerson(id) {
        const person = await this.getRes(`people/${id}/`)
        return this._transformPerson(person)
    }

    async getAllPlanets() {
        const res = await this.getRes(`planets/`)
        return res.results.map(this._transformPlanet)
    }

    async getPlanet(id) {
        const planet = await this.getRes(`planets/${id}/`)
        return this._transformPlanet(planet)
    }

    async getAllStarships() {
        const res = await this.getRes(`starships/`)
        return res.results.map(this._transformStarship)
    }

    async getStarship(id) {
        const starship = this.getRes(`starships/${id}/`)
        return this._transformStarship(starship)
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet), 
            name: planet.name,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            population: planet.population
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            lenght: starship.lenght,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}