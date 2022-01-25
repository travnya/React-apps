import React from 'react';
import './TodoApp.css'

const TodoApp = ({ todo, toggleTask, removeTask }) => {
  return (
    <div key={todo.id + todo.key} className='item-todo'>
        <div
            onClick={() => toggleTask(todo.id)}
            className={todo.complete ? 'item-text strike' : 'item-text'}>
                {todo.task}
        </div>
        <button className='item-delete btn btn-danger delete-btn' onClick={() => removeTask(todo.id)}></button>
    </div>
  )
}

export default TodoApp
