import React from 'react';

import './custom-button.scss';

const CustomButon = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={ `${isGoogleSignIn ? 'google-sign-in' : ''} custom-button ` }
        {...otherProps} > { children } </button>
)

export default CustomButon;