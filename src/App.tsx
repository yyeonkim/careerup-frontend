import loadable from '@loadable/component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';

const CareerMaps = loadable(() => import('./pages/CareerMaps'));
const Home = loadable(() => import('./pages/Home'));
const MyPage = loadable(() => import('./pages/MyPage'));

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/career-maps">
            <CareerMaps />
          </Route>
          <Route path="/mypage">
            <MyPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
