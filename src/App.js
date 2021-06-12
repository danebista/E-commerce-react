import './App.css';
import {Homepage} from './pages/homepage/homepage.component.jsx';
import {Switch,Route} from 'react-router-dom';
import Shop from './pages/shop/shop.component.jsx';

function Simba(){
  return (
    <div>
      {`I am Simba`}
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact  path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
