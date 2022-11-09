import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CloseButton, HomeLogo, Overlay } from './style';

import LoginGoogle, { Profile } from '../../components/LoginGoogle';
import NaverLogin from '../../components/NaverLogin';

export default function Home() {
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    console.log(location.hash);
  }, [location]);

  return (
    <>
      <Link to="/">
        <HomeLogo>Career:up</HomeLogo>
      </Link>
      <Link to={{ hash: '#login' }}>
        <button>로그인</button>
      </Link>
      <Link to="/career-maps">
        <button>커리어맵</button>
      </Link>

      {location.hash === '#login' && (
        <Overlay>
          <div className="welcome"></div>

          <div className="login">
            <div className="container">
              {!isLogin ? (
                <LoginGoogle setUserInfo={setUserInfo} setIsLogin={setIsLogin} />
              ) : (
                <Profile userInfo={userInfo} />
              )}
              <NaverLogin />
            </div>

            <Link to="/">
              <CloseButton>close</CloseButton>
            </Link>
          </div>
        </Overlay>
      )}
    </>
  );
}
