import React from 'react';
import './button.scss'

const Button = ({text, callback}) => {
    return (
        <button type="button" className="actionBtn" onClick={callback}>
            {text}
        </button>
    );
};

export default Button;