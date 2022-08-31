import React from 'react';
import './heroImage.scss'

const HeroImage = () => {
    return (
        <div className="heroImage" style={{backgroundImage: `url('https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png')` }} >
            <div className="wrapper">
                <div className="content">
                    <div className="text">
                        <h1 className="title"></h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroImage;