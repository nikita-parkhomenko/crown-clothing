import React, {Component} from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview'

class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    }

    render() {

        const {collections} = this.state;

        return(
            <div className="shop-page">
                {
                    collections.map( ({ id, ...otherCollections}) => (
                        <CollectionPreview key={id} {...otherCollections} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;