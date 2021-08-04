import React from 'react';
import './cart-icon.scss';
import { connect } from 'react-redux';
import {toggleCardHidden} from '../../redux/card/card-actions';
import {selectCountItems} from '../../redux/card/card-selectors'
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import {createStructuredSelector} from 'reselect';

 const CartIcon = ({toggleCardHidden, itemCount})=>(
    <div className="cart-icon" onClick={toggleCardHidden}>
        <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
    </div> 
 )

 const mapStatetoProps= createStructuredSelector(
    {
        itemCount : selectCountItems
    }
 )

 const mapDispatchtoProps = dispatch => (
     {
         toggleCardHidden: ()=> dispatch(toggleCardHidden())
     }
 )
 export default connect(mapStatetoProps, mapDispatchtoProps)(CartIcon);
