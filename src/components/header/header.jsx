import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../fiebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import './header.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo" /> 
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/contact'>
                CONTACT
            </Link>

            {
                currentUser ?
                    <div onClick={ () => auth.signOut() } className="option">SIGN OUT</div>
                    :
                    <Link className="option" to="/sign-in">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser,
        hidden : state.cart.hidden
    }
}

export default connect(mapStateToProps)(Header);

