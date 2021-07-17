import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/shoplogo.svg';
import './header-component.scss'
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.components';
import CartOpener from '../cart/cart.component'
import { createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selector';
import {selectCartHidden} from '../../redux/card/card-selectors';

const HeaderComponent = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div> :
                <Link className='option' to='/signinandsignup'>
                    SIGN IN
                </Link>
            }
            <CartIcon />
        </div>
        {hidden? null
            :<CartOpener />
        }
    </div>
)

const mapStateToProps= createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
});
export default connect(mapStateToProps)(HeaderComponent);