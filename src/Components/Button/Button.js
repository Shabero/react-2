import React from 'react';
import './style.css';
const Button = ({text}) => {
    const handleClick = () => {
        console.log(`Hello ${text}`)
    }
    return (
        <button
            className={'customButton'}
            onClick={handleClick}
            >
            {text}
        </button>
    )
}

export default Button