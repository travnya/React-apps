import React, { useState } from 'react';
import './TodoForm.css'

const TodoForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState('')
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
            value={userInput}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder='Введите значение...'
            className='col-form-label mt-4'/>
            <button className='btn btn-dark'>Записать</button>
    </form>
  )
}

export default TodoForm
