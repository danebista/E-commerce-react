import React from 'react';
import './cart.scss';
import '../custom-button/custom-button.component'
import CustomButton from '../custom-button/custom-button.component';

const CartOpener= ()=>(
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>Go to Checkout</CustomButton>
    </div>
)

export default CartOpener;