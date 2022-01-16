import React, {Component} from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Profile from '../Profile/Profile'
import Messages from "../Messages/Messages";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='main-wrapper'>
                    <Header/>
                    <Sidebar/>
                    <div className='content-wrapper'>
                        <Routes>
                            <Route path='/profile' element={<Profile/>}/>
                            <Route path='/messages' element={<Messages/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
