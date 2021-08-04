import React from 'react';
import './cartitem.scss';

const CartItem = ({item: {imageUrl, price, name, quantity}}) =>(
    <div className='cart-item'>
        <img src={imageUrl} alt={name}/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} * {price}</span>
        </div>
        <span className='name'></span>
    </div>
)

export default CartItem;