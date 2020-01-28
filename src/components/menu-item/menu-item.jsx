import React from 'react';

import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}
     className={`${size} menu-item`}>
        <div className="content">
            <h1 className="title"> {title} </h1>
            <span className="subtitle"> Buy Now </span>
        </div>
    </div>
);

export default MenuItem;