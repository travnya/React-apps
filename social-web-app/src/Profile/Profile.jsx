import React, { Component } from 'react'
import './Profile.css'
import Posts from './Posts/Posts'
import Friends from "./Friends/Friends";
import Content from "./Content/Content";

export default class Profile extends Component {
    render() {
        return (
            <div className='main-profile-wrapper'>
                <div className='profile-information'>
                    <Content />
                    <Friends />
                </div>
                <div className='post-wrapper'>
                    <form className="d-flex">
                        <input className="form-control me-sm-2 post-input" type="text" placeholder="Как ваши дела?" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Отправить</button>
                    </form>

                    <Posts />
                    <Posts />
                    <Posts />
                </div>
            </div>
        )
    }
}
