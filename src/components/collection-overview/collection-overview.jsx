import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview';
import { selectCollectionsForOverview } from '../../redux/shop/shop.selectors';

import './collection-overview.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {
            collections.map( ({ id, ...otherCollections }) => (
                <CollectionPreview key={id} {...otherCollections} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOverview
})

export default connect(mapStateToProps)(CollectionOverview);