import { useState } from 'react';

import { Container, LoginWrapper, Title } from './style';
import LoginGoogle, { Profile } from '../../components/LoginGoogle';
import NaverLogin from '../../components/NaverLogin';

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <Container>
      <LoginWrapper>
        <Title>Sign in</Title>
        {!isLogin ? <LoginGoogle setUserInfo={setUserInfo} setIsLogin={setIsLogin} /> : <Profile userInfo={userInfo} />}
        <NaverLogin />
      </LoginWrapper>
    </Container>
  );
}
