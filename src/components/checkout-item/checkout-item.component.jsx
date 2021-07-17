import React from 'react';

import './checkout.scss';
import { connect } from 'react-redux';

import {removeItem} from '../../redux/card/card-actions';

const CheckedOutItem = ({cartItem, clearItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
    <div className='checkout-item'>
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>

        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10005;</div>
    </div>
    )
}

const mapDispatchToProps =dispatch =>(
    {  clearItem: item => dispatch(removeItem(item))}
)
export default connect(null,mapDispatchToProps)(CheckedOutItem);