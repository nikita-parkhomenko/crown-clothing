import React from 'react';

import './custom-button.scss';

const CustomButon = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={ `${inverted ? 'inverted' : ''} custom-button ` }
        {...otherProps} > { children } </button>
)

export default CustomButon;