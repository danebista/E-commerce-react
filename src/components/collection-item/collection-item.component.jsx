import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import './collection-item.scss';

export const CollectionItem = ({name, price, imageUrl})=>(
    <div className="collection-item">
        <div className="image"
        style={{backgroundImage: `url(${imageUrl})`}}>
        </div>

        <div className="collection-footer">
            <span className = "name"> {name} </span>
            <span className = "price"> {`$${price}`} </span>
        </div>
        <CustomButton  isInverted>Add to cart</CustomButton>
    </div>
)
