import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, cartsCount }) => {
    return (
        <div className="cart-icon" >
            <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
            <span className="item-count"> { cartsCount } </span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    cartsCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);