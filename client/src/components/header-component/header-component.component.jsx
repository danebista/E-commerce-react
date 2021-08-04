import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/shoplogo.svg';
import './header-component.scss'
import CartIcon from '../cart-icon/cart-icon.components';
import CartOpener from '../cart/cart.component'
import { createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selector';
import {selectCartHidden} from '../../redux/card/card-selectors';
import { HeaderContiner, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles';
import {signOutStart} from '../../redux/user/user-actions';

const HeaderComponent = ({currentUser, hidden, signOutStart}) => (
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
                <OptionDiv className="option" onClick={signOutStart}>SIGN OUT</OptionDiv> :
                <OptionLink className='option' to='/signinandsignup'>
                    SIGN IN
                </OptionLink>
            }
            <OptionDiv>{console.log(currentUser)}</OptionDiv>
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

const mapDispatchToProps= dispatch => ({
    signOutStart: ()=> dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
