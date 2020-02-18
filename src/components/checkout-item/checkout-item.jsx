import React from 'react';

import './checkout-item.scss';

const CheckoutItem = ({ item: { imageUrl, name, quantity, price } }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={ imageUrl } alt="item" />
        </div>
        <span className="name"> {name} </span>
        <span className="quantity"> {quantity} </span>
        <span className="price"> {price} </span>
        <div className="remove-bytton">&#10005;</div>
    </div>
);

export default CheckoutItem;