import React, { useState } from 'react';
import './App.css'

const App = () => {
    const [value, setValue] = useState(0)
    const [visible, setVisible] = useState(true)

    if(visible) {
        return(
            <div>
                <button
                    onClick={() => setValue((v) => v + 1)}
                    className='btn btn-dark'>+</button>
                <button 
                    onClick={() => setVisible(false)}
                    className='btn btn-dark'>Hide</button>
                <HookCounter value={value}/>
            </div>
        )
    } else {
        return <button onClick={() => setVisible(true)} className='btn btn-dark' >Show</button>
    }
}

const HookCounter = ({ value }) => {
    return <p> {value} </p>
}

export default App

