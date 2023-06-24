import React from 'react';
import './button.css';
const Button = (props) => {
    const {value} = props
    return (
        <input  className="btn" value={value}/>
    )
}

export default Button;