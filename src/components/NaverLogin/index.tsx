import { useEffect, useRef } from 'react';

import NaverLoginBtn from '../Buttons/NaverLoginBtn';
import './style.css';

export default function NaverLogin() {
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = 'http://localhost:3000/login/naver';

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initNaverLogin();
  }, []);

  const initNaverLogin = () => {
    const naver_id_login = new window.naver_id_login(NAVER_CLIENT_ID, NAVER_CALLBACK_URL);
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton('green', 3, 40);
    naver_id_login.setDomain('http://localhost:3000/');
    naver_id_login.setState(state);
    naver_id_login.init_naver_id_login();
  };

  return (
    <>
      <div ref={ref} id="naver_id_login"></div>
      <NaverLoginBtn refObject={ref} />
    </>
  );
}
