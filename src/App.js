import './App.css';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import Shop from './pages/shop/shop.component.jsx';
import {Homepage} from './pages/homepage/homepage.component.jsx';
import HeaderComponent from './components/header-component/header-component.component.jsx';
import {SignInAndSignUpPage} from './pages/sign-up_and_sign-in/sign-up_and_sing-in.component.jsx'
import  {setCurrentUser, CheckUserSession} from './redux/user/user-actions';
import {selectCurrentUser} from './redux/user/user-selector';
import { createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component.jsx';

class App extends Component{
  unsubsribeFromAuth = null

  componentDidMount(){
    const {CheckUserSession} =this.props;
    CheckUserSession();
  }

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }

  render(){
    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route exact  path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signinandsignup'
           render={() => 
            this.props.currentUser ?(
            <Redirect to='/' />)
            :(<SignInAndSignUpPage />)}
            />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps= dispatch =>({
  CheckUserSession: ()=>dispatch(CheckUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
