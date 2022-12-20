import { RefObject, useState } from 'react';

import { Logo, LoginButton, Text } from './style';
import { IUserLoginInfo } from '../../../interfaces';

interface NaverLoginBtnProps {
  refObject: RefObject<HTMLDivElement>;
}

export default function NaverLoginBtn({ refObject }: NaverLoginBtnProps) {
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = 'http://localhost:3000/login/naver';
  const logoImg = process.env.PUBLIC_URL + '/images/naver-logo.png';

  const [userInfo, setUserInfo] = useState<IUserLoginInfo | null>(null);

  const onClick = () => {
    getProfileData();

    const childrenElement = refObject.current?.children[0] as HTMLAnchorElement;
    childrenElement.click();
  };

  const getProfileData = () => {
    const naver_id_login = new window.naver_id_login(NAVER_CLIENT_ID, NAVER_CALLBACK_URL);
    // 접근 토큰 값
    const token = naver_id_login.oauthParams.access_token;

    // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
    const getProfileDataCallback = () => {
      const email = naver_id_login.getProfileData('email');
      const name = naver_id_login.getProfileData('name');
      const profileImg = naver_id_login.getProfileData('profile_image');
      // 별명은 추가 선택사항
      const nickname = naver_id_login.getProfileData('nickname');

      setUserInfo({ token, email, name, profileImg, nickname });
    };

    // 네이버 사용자 프로필 조회
    naver_id_login.get_naver_userprofile(getProfileDataCallback());
    alert(userInfo);
  };

  return (
    <LoginButton onClick={onClick}>
      <Logo src={logoImg} />
      <Text> 네이버 계정으로 로그인</Text>
    </LoginButton>
  );
}
