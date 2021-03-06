import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview';
import './collections.scss';
import {selectCollectionForPreview} from '../../redux/shop/shop.selector';

const CollectionOverview = ({collections})=> (
    <div className="collections-overview">
         {
               collections.map(({id, ...collectionProps}) => (
                <CollectionPreview key = {id} {...collectionProps} />
              ))
         }
    </div>
)

const mapStateToProps = createStructuredSelector(
     {
         collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
