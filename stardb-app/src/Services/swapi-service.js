import {Component} from "react";

export default class  SwapiService extends Component{

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
        return res.results
    }

    getPerson(id) {
        return this.getRes(`people/${id}/`)
    }

    getAllPlanets() {
        return this.getRes(`planets/`)
    }

    getPlanet(id) {
        return this.getRes(`planets/${id}/`)
    }

    getAllStarships() {
        return this.getRes(`starships/`)
    }

    getStarship(id) {
        return this.getRes(`starships/${id}/`)
    }
}