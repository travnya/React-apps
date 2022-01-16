import React, {Component} from 'react';
import './AddPostForm.css'

export default class AddPostForm extends Component {
    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addPost(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className="d-flex"
                  onSubmit={this.onSubmit}>
                <input
                    className="form-control me-sm-2 post-input"
                    onChange={this.onLabelChange}
                    type="text"
                    placeholder="Как ваши дела?"
                    value={this.state.label}/>
                <button
                    className="btn btn-secondary my-2 my-sm-0"
                    type="submit"
                    onClick={this.onSubmit}>
                        Добавить
                </button>
            </form>
        );
    }
}