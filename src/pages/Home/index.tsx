import LoginGoogle, { Profile } from '../../components/LoginGoogle';
import { useState } from 'react';

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <>
      {!isLogin ? <LoginGoogle setUserInfo={setUserInfo} setIsLogin={setIsLogin} /> : <Profile userInfo={userInfo} />}
    </>
  );
}
