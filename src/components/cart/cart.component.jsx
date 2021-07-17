import React from 'react';
import './cart.scss';
import {connect} from 'react-redux';
import '../custom-button/custom-button.component'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cartitem.component';
import {selectCartItems} from '../../redux/card/card-selectors';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';

const CartOpener= ({cardItems, history})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cardItems.length ?
                cardItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                :<span className="empty-message">Your cart is empty</span>
            }
        </div> 
        <CustomButton onClick = {()=> history.push('/checkout')}>Go to Checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector(
    {
        cardItems: selectCartItems
    }
)
export default withRouter(connect(mapStateToProps)(CartOpener));
