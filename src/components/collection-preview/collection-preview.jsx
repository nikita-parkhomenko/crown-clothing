import React from 'react';

import CollectionItem from '../collection-item/collection-item';

import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1> {title.toUpperCase()} </h1>
        <div className="preview">
            {
                items
                    .filter( (item, indx) => indx < 4 )
                    .map( (item) => (
                        <CollectionItem key={item.id} item={item}  />
                    ))
            }
        </div>
    </div>
);

export default CollectionPreview;