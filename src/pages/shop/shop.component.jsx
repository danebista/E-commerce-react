import React from 'react';
import './shop.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class Shop extends React.Component{
    constructor(props){
        super(props);

        this.state = {collections: SHOP_DATA}
    }

    render(){
        const {collections} = this.state;
       return ( <div>
           {
               collections.map(({id, ...collectionProps}) => (
                <CollectionPreview key = {id} {...collectionProps} />
              ))
           }
       </div>)
    }
}

export default Shop;