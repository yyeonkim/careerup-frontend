import { useEffect, useRef } from 'react';

import NaverLoginBtn from '../Buttons/NaverLoginBtn';
import './style.css';

export default function NaverLogin() {
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = 'http://localhost:3000/login/naver';

  const ref = useRef<any>(null);

  useEffect(() => {
    initNaverLogin();
    getProfileData();
  }, []);

  const initNaverLogin = () => {
    const naver_id_login = new window.naver_id_login(NAVER_CLIENT_ID, NAVER_CALLBACK_URL);
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton('green', 3, 40);
    naver_id_login.setDomain('http://localhost:3000/');
    naver_id_login.setState(state);
    naver_id_login.init_naver_id_login();
  };

  const getProfileData = () => {
    const naver_id_login = new window.naver_id_login(NAVER_CLIENT_ID, NAVER_CALLBACK_URL);
    // 접근 토큰 값
    naver_id_login.oauthParams.access_token;

    // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
    const getProfileDataCallback = () => {
      naver_id_login.getProfileData('email');
      naver_id_login.getProfileData('name');
      naver_id_login.getProfileData('profile_image');
      // 별명은 추가 선택사항
      if (naver_id_login.getProfileData('nickname')) {
        naver_id_login.getProfileData('nickname');
      }
    };

    // 네이버 사용자 프로필 조회
    naver_id_login.get_naver_userprofile(getProfileDataCallback());
  };

  return (
    <>
      <div ref={ref} id="naver_id_login"></div>
      <NaverLoginBtn refObject={ref} />
    </>
  );
}
