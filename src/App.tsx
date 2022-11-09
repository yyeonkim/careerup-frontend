import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CareerMaps from './pages/CareerMaps';
import Home from './pages/Home';
import RoadMap from './components/RoadMap';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/roadmap">
          <RoadMap />
        </Route>
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
