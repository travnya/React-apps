import React, { Component } from "react";
import './Posts.css'

export default class Posts extends Component {
    render() {
        const postAuthor = 'Владислав Самсонов'
        const postMessage = 'Я себя очень хорошо чувствую'
        const profileAvatar = 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large'
        return (
            <div className="posts-wrapper">
                <form className="d-flex">
                    <input className="form-control me-sm-2" type="text" placeholder="Как ваши дела?" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Отправить</button>
                </form>
                <div className="post-items">
                    <div className="item">
                        <img src={profileAvatar} alt="Avatar"/>
                        <h5>{postAuthor}</h5>
                        <p>{postMessage}</p>
                    </div>
                </div>
            </div>
        )
    }
}