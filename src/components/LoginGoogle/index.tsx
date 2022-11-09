import { useCallback, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

import GoogleLoginBtn from '../Buttons/GoogleLoginBtn';

interface IUserProfile {
  profileImg?: string;
  email?: string;
  name?: string;
}

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const LoginGoogle = () => {
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

  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId: CLIENT_ID,
      plugin_name: 'chat',
    });
  });

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

// interface Props2 {
//   userInfo: IUserProfile;
// }

// export const Profile: FC<Props2> = ({ userInfo }) => {
//   return (
//     <>
//       <div
//         style={{
//           width: '32px',
//           height: '32px',
//           borderRadius: '32px',
//           background: `url(${userInfo.profileImg.replace('96', '32')})`,
//         }}
//       />
//       <h3>이름: {userInfo.name}</h3>
//       <h3>이메일: {userInfo.email}</h3>
//     </>
//   );
// };
