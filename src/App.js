import './App.css';
import {Homepage} from './pages/homepage/homepage.component.jsx';
import {Switch,Route} from 'react-router-dom';
import Shop from './pages/shop/shop.component.jsx';
import {HeaderComponent} from './components/header-component/header-component.component.jsx';
import {SignInAndSignUpPage} from './pages/sign-up_and_sign-in/sign-up_and_sing-in.component.jsx'

function App() {
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

export default App;
