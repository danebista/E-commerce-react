import React from 'react';
import './cart.scss';
import {connect} from 'react-redux';
import '../custom-button/custom-button.component'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cartitem.component';
import {selectCartItems} from '../../redux/card/card-selectors';

const CartOpener= ({cardItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cardItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div> 
        <CustomButton>Go to Checkout</CustomButton>
    </div>
)

const mapStateToProps = (state) => (
    {
        cardItems: selectCartItems(state)
    }
)
export default connect(mapStateToProps)(CartOpener);