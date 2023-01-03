import { ChangeEvent, FormEvent, Dispatch } from 'react';
import { useHistory } from 'react-router-dom';

import { StyledForm, Message } from './style';
import { ILoginData } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  changeEmail,
  changeName,
  changePassword,
  changePasswordCheck,
  setMessage,
  resetForm,
} from '../../redux/reducers/LoginFormSlice';

interface LoginFormProps {
  isSignIn: boolean;
  setIsSignIn: Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginForm({ isSignIn, setIsSignIn }: LoginFormProps) {
  const { email, name, password, passwordCheck, message } = useAppSelector((state) => state.loginForm.value);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setMessage(isSignIn)); // 로그인, 회원가입 메시지가 다름

    if (isValid()) {
      const url = isSignIn ? 'http://3.36.230.165:8080/user/login' : 'http://3.36.230.165:8080/user/signup';
      const body = isSignIn ? { username: email, password } : { name, username: email, password };

      postUser(url, body);
    }
  };

  const isValid = () => {
    // 빈 값이 하나라도 있으면 false, 아니면 true
    return isSignIn
      ? email !== '' && password !== ''
      : email !== '' && password !== '' && name !== '' && passwordCheck !== '';
  };

  const postUser = (url: string, data: ILoginData) => {
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok && isSignIn) {
        // accessToken 받기
        history.push('/mypage');
      }

      if (response.ok && !isSignIn) {
        alert('회원가입이 완료되었습니다. 로그인 해주세요.');
        history.push('/#login');
      }
    });
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => dispatch(changeName(event.currentTarget.value));
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => dispatch(changeEmail(event.currentTarget.value));
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(changePassword(event.currentTarget.value));
  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(changePasswordCheck(event.currentTarget.value));

  const changeForm = () => {
    toggleForm();
    dispatch(resetForm());
  };

  const toggleForm = () => {
    setIsSignIn((current) => !current);
  };

  return isSignIn ? (
    <StyledForm onSubmit={onSubmit}>
      <input placeholder="이메일" type="email" value={email} onChange={onChangeEmail} />
      <input placeholder="비밀번호" type="password" value={password} onChange={onChangePassword} />

      <Message>{message}</Message>
      <button>로그인</button>
      <div>
        <span>비밀번호 찾기</span> | <span onClick={changeForm}>회원가입</span>
      </div>
    </StyledForm>
  ) : (
    <StyledForm onSubmit={onSubmit}>
      <input placeholder="이름" type="text" value={name} onChange={onChangeName} />
      <input placeholder="이메일" type="email" value={email} onChange={onChangeEmail} />
      <input placeholder="비밀번호" type="password" value={password} onChange={onChangePassword} />
      <input placeholder="비밀번호 확인" type="password" value={passwordCheck} onChange={onChangePasswordCheck} />

      <Message>{message}</Message>
      <button>회원가입</button>
      <div>
        <span onClick={changeForm}>로그인</span>
      </div>
    </StyledForm>
  );
}
