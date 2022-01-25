import React, { useState } from 'react';
import TodoApp from '../TodoApp/TodoApp';
import TodoForm from '../TodoForm/TodoForm';
import './App.css'

const App = () => {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((task) => task.id === id ? { ...task, complete: !task.complete } : { ...task })
        ])
    }

  return (
    <div className='App'>
        <header>
            <h1>Список задач: {todos.length}</h1>
        </header>
        <TodoForm addTask={addTask} />
        {todos.map((todo) => {
            return (
                <TodoApp
                    todo={todo}
                    key={todo.id}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                />
            )
        })}
    </div>
  )
}

export default App
