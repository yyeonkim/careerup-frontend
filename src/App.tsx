import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CareerMaps from './pages/CareerMaps';
import Home from './pages/Home';

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
