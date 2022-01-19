import './PersonDetails.css'
import React from 'react'

export const PersonDetails = () => {
    return (
        <div className='person-details-wrapper'>
                <img src='https://upload.wikimedia.org/wikipedia/ru/3/39/R2-D2_Droid.png' />
                <ul className='person-details-list'>
                    <p>R2-D2</p>
                        <hr/>
                    <li>Gender: Male</li>
                        <hr/>
                    <li>Birth Year: 43</li>
                        <hr/>
                    <li>Eye: Colored</li>
                </ul>
        </div>
    )
}
