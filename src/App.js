import './App.css';
import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Shop from './pages/shop/shop.component.jsx';
import {Homepage} from './pages/homepage/homepage.component.jsx';
import {HeaderComponent} from './components/header-component/header-component.component.jsx';
import {SignInAndSignUpPage} from './pages/sign-up_and_sign-in/sign-up_and_sing-in.component.jsx'
import {auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubsribeFromAuth = null

  componentDidMount(){
    this.unsubsribeFromAuth=auth.onAuthStateChanged(async user=>{
      createUserProfileDocument(user);  
    });    
  }

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }

  render(){
    return (
      <div>
        <HeaderComponent currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact  path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signinandsignup' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
