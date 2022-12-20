import { useCallback, useState } from 'react';
import GoogleLogin from 'react-google-login';

import GoogleLoginBtn from '../../Buttons/GoogleLoginBtn';

interface IUserProfile {
  profileImg?: string;
  email?: string;
  name?: string;
}

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginGoogle = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState<IUserProfile>({});

  const googleLogin = useCallback((response: any) => {
    const userInfo = {
      profileImg: response.profileObj.imageUrl,
      email: response.profileObj.email,
      name: response.profileObj.name,
    };

    setUserInfo(userInfo);
    setIsLogin(true);
  }, []);

  return (
    <GoogleLogin
      clientId={CLIENT_ID as string}
      onSuccess={googleLogin}
      onFailure={(res) => console.log(res)}
      cookiePolicy={'single_host_origin'}
      render={(renderProps) => <GoogleLoginBtn onClick={renderProps.onClick} />}
    />
  );
};

export default LoginGoogle;
