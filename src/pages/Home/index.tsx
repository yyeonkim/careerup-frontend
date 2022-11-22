import { Link, useLocation } from 'react-router-dom';

import { Container, HomeLogo, LoginButton, Header, Main, MapButton } from './style';
import LoginModal from '../../components/Modal/Login';

export default function Home() {
  const location = useLocation();

  return (
    <Container>
      <Header>
        <Link to="/">
          <HomeLogo src={process.env.PUBLIC_URL + '/images/careerup_logo_small.png'} />
        </Link>
        <Link to={{ hash: '#login' }}>
          <LoginButton>Sign in</LoginButton>
        </Link>
      </Header>

      <Main>
        <div className="content">
          <div className="info">
            <div>
              내 손으로 직접 만드는
              <br />
              커리어 성장 플랫폼
            </div>
            <div>Career:up</div>
          </div>
          <img className="logo" src={process.env.PUBLIC_URL + '/images/careerup_logo_big.png'} />
        </div>
        <Link to="/career-maps">
          <MapButton>내 커리어 맵 만들러가기</MapButton>
        </Link>
      </Main>

      {location.hash === '#login' && <LoginModal />}
    </Container>
  );
}
