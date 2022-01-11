import React, {Component} from "react";
import AddPostForm from "../AddPostForm/AddPostForm";
import './Posts.css'

export default class Posts extends Component {

    maxID = 0

    state = {
        posts: [
            this.createPost('Проверка1'),
            this.createPost('Проверка2'),
            this.createPost('Проверка3')
        ]
    }

    createPost (label) {
        return {
            Author: 'Владислав Самсонов',
            Message: label,
            Avatar: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large',
            id: this.maxID++
        }
    }

    addPost = (text) => {
        const newPost = this.createPost(text)
        this.setState( ({ posts }) => {
            const newArray = [...posts, newPost]
            return {
                posts: newArray
            }
        })
    }

    deletePost = (id) => {
        this.setState( ({ posts }) => {
            const idx = this.state.posts.findIndex((el) => el.id === id)
            const newArray = [
                ...posts.slice(0, idx),
                ...posts.slice(idx + 1)
            ]
            return {
                posts: newArray
            }
        })
    }

    render() {
        const {posts} = this.state;
        return (
            <div className="posts-wrapper">
                <AddPostForm addPost={this.addPost}/>
                {posts.map((userPost) => (
                    <div className='item' key={userPost.id}>
                        <img src={userPost.Avatar} alt='Фотография профиля'/>
                        <h5>{userPost.Author}</h5>
                        <p>{userPost.Message}</p>
                        <button
                            type="button"
                            className='btn btn-outline-danger delete-btn'
                            title='Удалить пост'
                            onClick={this.deletePost}/>
                    </div>
                ))}
            </div>
        )
    }
}

