import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';

import CareerMaps from './pages/CareerMaps';
import Home from './pages/Home';
import MyPage from './pages/MyPage';

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
