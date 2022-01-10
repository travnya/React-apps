import React, { Component } from 'react'
import logo from '../resources/amoeba.png'
import './HeaderElements.css'

export default class HeaderElements extends Component {
    render() {
        return (
            <div className='sec-wrapper'>

                <a href="/profile">
                    <div className='logo-name'>
                        <img className='logoimg' src={logo}/>
                        <h1>Amöba</h1>
                        <img className='logoimg' src={logo}/>
                    </div>
                </a>
                <div className='menu'>

                </div>
            </div>
        )
    }
}
