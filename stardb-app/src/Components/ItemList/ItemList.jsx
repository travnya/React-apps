import './ItemList.css'
import React from 'react'

export const ItemList = () => {
    return (
        <div className='list-group-item'>
            <div className='item'>
                <p>Luke Skywalker</p>
            </div>
            <div className='item'>
                <p>Darth Wader</p>
            </div>
            <div className='item'>
                <p>R2-D2</p>
            </div>
        </div>
    )
}