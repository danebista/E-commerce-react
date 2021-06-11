import './App.css';
import {Homepage} from './homepage/homepage.component.jsx';
import {Switch,Route} from 'react-router-dom';
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
        <Route path='/hats' component={Simba} />
      </Switch>
    </div>
  );
}

export default App;
