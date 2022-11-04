import { FC, useCallback } from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

import GoogleLoginBtn from '../Buttons/GoogleLoginBtn';

interface Props {
  setUserInfo: any;
  setIsLogin: any;
}

export const LoginGoogle: FC<Props> = ({ setUserInfo, setIsLogin }) => {
  const googleLogin = useCallback((response: any) => {
    const userInfo = {
      profileImg: response.profileObj.imageUrl,
      email: response.profileObj.email,
      name: response.profileObj.name,
    };
    setUserInfo(userInfo);
    setIsLogin(true);
  }, []);

  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId: '193044166708-p0v57508c4ng0br35sksc7ac8efj3ihr.apps.googleusercontent.com',
      plugin_name: 'chat',
    });
  });

  return (
    <>
      <GoogleLogin
        clientId="193044166708-p0v57508c4ng0br35sksc7ac8efj3ihr.apps.googleusercontent.com"
        buttonText="구글 계정으로 로그인"
        onSuccess={googleLogin}
        onFailure={(res) => console.log(res)}
        cookiePolicy={'single_host_origin'}
      />
      <GoogleLoginBtn />
    </>
  );
};

export default LoginGoogle;

interface Props2 {
  userInfo: any;
}

export const Profile: FC<Props2> = ({ userInfo }) => {
  return (
    <>
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '32px',
          background: `url(${userInfo.profileImg.replace('96', '32')})`,
        }}
      />
      <h3>이름: {userInfo.name}</h3>
      <h3>이메일: {userInfo.email}</h3>
    </>
  );
};
