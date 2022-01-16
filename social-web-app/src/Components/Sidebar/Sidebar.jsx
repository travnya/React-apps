import React, { Component } from 'react'
import './Sidebar.css'
import {NavLink} from "react-router-dom";

export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar-wrapper'>
                <nav className='nav-menu'>
                    <NavLink to='/feed'><button type="button" className='btn btn-outline-light btn-1'>Новости</button></NavLink>
                    <NavLink to='/profile'><button type="button" className='btn btn-outline-light btn-2'>Профиль</button></NavLink>
                    <NavLink to='/friends'><button type="button" className='btn btn-outline-light btn-6'>Друзья</button></NavLink>
                    <NavLink to='/messages'><button type="button" className='btn btn-outline-light btn-5'>Сообщения</button></NavLink>
                    <NavLink to='/music'><button type="button" className='btn btn-outline-light btn-3'>Музыка</button></NavLink>
                    <NavLink to='/videos'><button type="button" className='btn btn-outline-light btn-4'>Видеозаписи</button></NavLink>
                    <NavLink to='/settings'><button type="button" className='btn btn-outline-light btn-4'>Настройки</button></NavLink>
                </nav>
            </div>
        )
    }
}