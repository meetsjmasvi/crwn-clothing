import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE: { props.match.params.hatsId }</h1>
    <h1>HATS COLOR: { props.match.params.color }</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;