import { Link, useLocation } from 'react-router-dom';

import { Container, HomeLogo, LoginButton, Header } from './style';
import LoginModal from '../../components/Modal/Login';

export default function Home() {
  const location = useLocation();

  return (
    <Container>
      <Header>
        <Link to="/">
          <HomeLogo>Logo</HomeLogo>
        </Link>
        <Link to={{ hash: '#login' }}>
          <LoginButton>Sign in</LoginButton>
        </Link>
      </Header>
      {/* <Link to="/career-maps">
        <button>커리어맵</button>
      </Link> */}

      {location.hash === '#login' && <LoginModal />}
    </Container>
  );
}
