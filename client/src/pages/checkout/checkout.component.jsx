import React from 'react';
import './checkout.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCountItemsTotal} from '../../redux/card/card-selectors';
import CheckedOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className= 'checkout-header'>
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckedOutItem key={cartItem.id} cartItem={cartItem}/>
        ))}
        <div className="total">
            <span>TOTAL:${total}</span>
        </div>
        <div className="test-warning">
            * This is a test system for payment
            <br />
            Please use the following credit card
            <br />
            4242424242424242    
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems ,
    total: selectCountItemsTotal
});
export default  connect(mapStateToProps)(CheckoutPage);