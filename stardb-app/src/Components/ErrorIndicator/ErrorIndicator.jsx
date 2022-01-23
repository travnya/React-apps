import React from 'react';
import './ErrorIndicator.css'
import ErrorIcon from './DeathStar.png'

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <p><img src={ErrorIcon} alt='error-icon'/></p>
            <span className='boom'>
                BOOM!
            </span>
            <p>
                Something has gone terrebly wrong
            </p>
            <p>
                (but we already sent droid to fix it)
            </p>
        </div>
    )
}

export default ErrorIndicator
