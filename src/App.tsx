import loadable from '@loadable/component';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { getAccessToken } from './api/user';

import Layout from './components/Layout';
import useExpireToken from './hooks/useExpireToken';
import ChangePassword from './pages/ChangePassword';

const CareerMaps = loadable(() => import('./pages/CareerMaps'));
const Home = loadable(() => import('./pages/Home'));
const MyPage = loadable(() => import('./pages/MyPage'));
const ForgottenPassword = loadable(() => import('./pages/ForgottenPassword'));

const accessToken = getAccessToken();

function App() {
  useExpireToken();

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/career-maps">{accessToken ? <CareerMaps /> : <Redirect to="/#login" />}</Route>
          <Route path="/mypage">{accessToken ? <MyPage /> : <Redirect to="/#login" />}</Route>
          <Route path="/changepassword">{accessToken ? <ChangePassword /> : <Redirect to="/#login" />}</Route>
          <Route path="/forgottenpassword">
            <ForgottenPassword />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
