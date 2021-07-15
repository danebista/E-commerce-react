import './App.css';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Shop from './pages/shop/shop.component.jsx';
import {Homepage} from './pages/homepage/homepage.component.jsx';
import HeaderComponent from './components/header-component/header-component.component.jsx';
import {SignInAndSignUpPage} from './pages/sign-up_and_sign-in/sign-up_and_sing-in.component.jsx'
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import  {setCurrentUser} from './redux/user/user-actions';
class App extends Component{
  unsubsribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubsribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);  

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }

      setCurrentUser(userAuth);
    });    
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
          <Route path='/signinandsignup' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps= dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
