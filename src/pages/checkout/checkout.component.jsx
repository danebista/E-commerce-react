import React from 'react';
import './checkout.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCountItemsTotal} from '../../redux/card/card-selectors';

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
        <div className="total">
            <span>TOTAL:${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems ,
    total: selectCountItemsTotal
});
export default  connect(mapStateToProps)(CheckoutPage);