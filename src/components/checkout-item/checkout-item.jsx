import React from 'react';
import { connect } from 'react-redux';

import { removeItem } from '../../redux/cart/cart.action';

import './checkout-item.scss';

const CheckoutItem = ({ item: { imageUrl, name, quantity, price }, removeItem, item }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={ imageUrl } alt="item" />
        </div>
        <span className="name"> {name} </span>
        <span className="quantity"> {quantity} </span>
        <span className="price"> {price} </span>
        <div onClick={() => removeItem(item)} className="remove-button">&#10005;</div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);