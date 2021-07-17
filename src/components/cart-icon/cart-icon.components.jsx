import React from 'react';
import './cart-icon.scss';
import { connect } from 'react-redux';
import {toggleCardHidden} from '../../redux/card/card-actions';

import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';


 const CartIcon = ({toggleCardHidden, itemCount})=>(
    <div className="cart-icon" onClick={toggleCardHidden}>
        <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
    </div> 
 )

 const mapStatetoProps= ({card: {cardItems}}) =>(
    {
        itemCount : cardItems.reduce((acc, cardItem)=> acc + cardItem.quantity,0)
    }
 )

 const mapDispatchtoProps = dispatch => (
     {
         toggleCardHidden: ()=> dispatch(toggleCardHidden())
     }
 )
 export default connect(mapStatetoProps, mapDispatchtoProps)(CartIcon);
