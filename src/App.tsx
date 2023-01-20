import loadable from '@loadable/component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import useExpireToken from './hooks/useExpireToken';
import ChangePassword from './pages/ChangePassword';

const CareerMaps = loadable(() => import('./pages/CareerMaps'));
const Home = loadable(() => import('./pages/Home'));
const MyPage = loadable(() => import('./pages/MyPage'));
const ForgottenPassword = loadable(() => import('./pages/ForgottenPassword'));

function App() {
  useExpireToken();

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/career-maps">
            <CareerMaps />
          </Route>
          <Route path="/mypage">
            <MyPage />
          </Route>
          <Route path="/changepassword">
            <ChangePassword />
          </Route>
          <Route path="/forgottenpassword">
            <ForgottenPassword />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
