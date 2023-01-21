import { ChangeEvent, FormEvent, Dispatch, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { StyledForm, Message } from './style';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setMessage, resetForm, setValue, completeCertification } from '../../redux/reducers/LoginSlice';
import { getAuthorization, postUserLogin } from '../../api/user';

interface LoginFormProps {
  isSignIn: boolean;
  setIsSignIn: Dispatch<React.SetStateAction<boolean>>;
}

const ONEDAY = 86400000;

export default function LoginForm({ isSignIn, setIsSignIn }: LoginFormProps) {
  const loginValue = useAppSelector((state) => state.login.value);
  const [checkNum, setCheckNum] = useState(null);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setMessage(isSignIn)); // 로그인, 회원가입 메시지가 다름

    if (isValid()) {
      const url = isSignIn ? '/user/login' : '/user/signup';
      const { username, password, name, emailCertification } = loginValue;
      const data = isSignIn ? { username, password } : { name, username, password, emailCertification };

      const response = await postUserLogin(url, data);
      const signUpSuccess = response.status === 200 && !isSignIn;
      const loginSuccess = response.status === 200 && isSignIn;

      if (signUpSuccess) {
        // 토큰을 받지 못했으면
        if (!response.data.result) {
          alert(response.data.message);
          return;
        }
        alert('회원가입이 완료되었습니다. 로그인 해주세요.');
        changeForm();
      }

      if (loginSuccess) {
        // 토큰을 받지 못했으면
        if (!response.data.result) {
          alert(response.data.message);
          return;
        }
        saveAccessToken(response.data.result.accessToken);
        refreshPage();
      }
    }
  };

  const isValid = () => {
    // 빈 값이 하나라도 있으면 false
    // 메일 인증을 안 하면 false
    return isSignIn
      ? loginValue.username !== '' && loginValue.password !== ''
      : loginValue.username !== '' &&
          loginValue.password !== '' &&
          loginValue.name !== '' &&
          loginValue.passwordCheck !== '' &&
          loginValue.emailCertification;
  };

  const saveAccessToken = (accessToken: string) => {
    const tokenObject = JSON.stringify({ value: accessToken, expiration: Date.now() + ONEDAY });
    localStorage.setItem('accessToken', tokenObject);
  };

  const refreshPage = () => {
    history.push('/');
    history.go(0);
  };

  const goForgottenPassword = async () => {
    history.push('/forgottenpassword');
  };

  const changeForm = () => {
    setIsSignIn((current) => !current);
    dispatch(resetForm());
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    dispatch(setValue({ ...loginValue, [name]: value }));
  };

  const onClickSend = async () => {
    try {
      const response = await axios.post(
        '/user/signup/mailconfirm',
        { email: loginValue.username },
        { headers: getAuthorization() }
      );

      if (response.status === 200) {
        alert('이메일을 전송했습니다. 인증번호를 입력해주세요.');
        setCheckNum(response.data.result.checkNum);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickCheck = () => {
    if (loginValue.checkNum === `${checkNum}`) {
      alert('인증되었습니다.');
      dispatch(completeCertification());
    } else {
      alert('유효하지 않은 번호입니다.');
    }
  };

  return isSignIn ? (
    <StyledForm onSubmit={onSubmit}>
      <input name="username" placeholder="이메일" type="username" value={loginValue.username} onChange={onChange} />
      <input name="password" placeholder="비밀번호" type="password" value={loginValue.password} onChange={onChange} />

      <Message>{loginValue.message}</Message>
      <button>로그인</button>
      <div>
        <span onClick={goForgottenPassword}>비밀번호 찾기</span> | <span onClick={changeForm}>회원가입</span>
      </div>
    </StyledForm>
  ) : (
    <StyledForm onSubmit={onSubmit}>
      <input name="name" placeholder="이름" type="text" value={loginValue.name} onChange={onChange} />
      <div className="verification">
        <input name="username" placeholder="이메일" type="username" value={loginValue.username} onChange={onChange} />
        <div className="verification__button" onClick={onClickSend}>
          {checkNum ? '재전송' : '인증'}
        </div>
      </div>
      {checkNum && (
        <div className="verification">
          <input name="checkNum" placeholder="인증번호" type="text" value={loginValue.checkNum} onChange={onChange} />
          <div className="verification__button" onClick={onClickCheck}>
            확인
          </div>
        </div>
      )}

      <input name="password" placeholder="비밀번호" type="password" value={loginValue.password} onChange={onChange} />
      <input
        name="passwordCheck"
        placeholder="비밀번호 확인"
        type="password"
        value={loginValue.passwordCheck}
        onChange={onChange}
      />

      <Message>{loginValue.message}</Message>
      <button>회원가입</button>
      <div>
        <span onClick={changeForm}>로그인</span>
      </div>
    </StyledForm>
  );
}
