import React from 'react';
import { connect } from 'react-redux';

import { removeItem, decreaseItem, addItem } from '../../redux/cart/cart.action';

import './checkout-item.scss';

const CheckoutItem = ({ item: { imageUrl, name, quantity, price }, removeItem, item, decreaseItem, addItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={ imageUrl } alt="item" />
        </div>
        <span className="name"> {name} </span>
        <span className="quantity">
            <div onClick={() => decreaseItem(item)} className="arrow">&#10094;</div>
            <span className="value">{quantity}</span> 
            <div onClick={() => addItem(item)} className="arrow">&#10095;</div>
        </span>
        <span className="price"> {price} </span>
        <div onClick={() => removeItem(item)} className="remove-button">&#10005;</div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);