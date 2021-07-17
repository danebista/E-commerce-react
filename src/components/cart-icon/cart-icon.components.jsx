import React from 'react';
import './cart-icon.scss';
import { connect } from 'react-redux';
import {toggleCardHidden} from '../../redux/card/card-actions';

import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';


 const CartIcon = ({toggleCardHidden})=>(
    <div className="cart-icon" onClick={toggleCardHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div> 
 )


 const mapDispatchtoProps = dispatch => (
     {
         toggleCardHidden: ()=> dispatch(toggleCardHidden())
     }
 )
 export default connect(null, mapDispatchtoProps)(CartIcon);