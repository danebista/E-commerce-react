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
import { HeaderContiner, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles';

const HeaderComponent = ({currentUser, hidden}) => (
    <HeaderContiner>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/shop">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionDiv className="option" onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv> :
                <OptionLink className='option' to='/signinandsignup'>
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden? null
            :<CartOpener />
        }
    </HeaderContiner>
)

const mapStateToProps= createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
});
export default connect(mapStateToProps)(HeaderComponent);