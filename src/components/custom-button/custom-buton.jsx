import React from 'react';

import './custom-button.scss';

const CustomButon = ({ children, ...otherProps }) => (
    <button className="custom-button" {...otherProps} > { children } </button>
)

export default CustomButon;