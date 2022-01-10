import React, { Component } from "react";
import './Posts.css'

export default class Posts extends Component {
    render() {
        const postAuthor = 'Владислав Самсонов'
        const postMessage = 'Я сегодня проснулся с хорошим настроением и готов работать весь день)))'
        const profileAvatar = 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large'
        return (
            <div className="posts-wrapper">
                <div className="item">
                    <img src={profileAvatar} alt="Avatar"/>
                    <h5>{postAuthor}</h5>
                    <p>{postMessage}</p>
                </div>
            </div>
        )
    }
}