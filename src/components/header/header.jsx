import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../fiebase/firebase.utils'

import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser }) => (
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
        </div>
    </div>
);

export default Header;

