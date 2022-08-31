import React from 'react';
import './grid.scss'

const Grid = ({header, children}) => {

    return (
        <div className="grid">
            <div className="wrapper">
                <h1 className="title">{header}</h1>
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default Grid;