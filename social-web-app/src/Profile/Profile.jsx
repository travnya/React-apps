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
                    <Posts />
                </div>
            </div>

        )
    }
}
