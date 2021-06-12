import React from 'react';
import './collection-preview.scss';
import '../collection-item/collection-item.component';
import { CollectionItem } from '../collection-item/collection-item.component';

export const CollectionPreview = ({title, items}) => (
    <div className = 'collection-preview'>
        {console.log(items)}
        <h1 className = 'title'> {title.toUpperCase()} </h1>
        <div className = 'preview'>
            
            {items.filter((item, index)=>index < 4).map(({id, ...otherProps}) => (
                <CollectionItem key={id} {...otherProps} />
            ))}
        </div>
    </div>
)

export default CollectionPreview;