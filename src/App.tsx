import loadable from '@loadable/component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const CareerMaps = loadable(() => import('./pages/CareerMaps'));
const Home = loadable(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/career-maps">
          <CareerMaps />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
