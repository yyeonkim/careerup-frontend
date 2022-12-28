import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';

import { Background, Modal, LoginForm, Logo, Message } from './style';
import { IUserBody } from '../../../interfaces';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  changeEmail,
  changeName,
  changePassword,
  changePasswordCheck,
  setMessage,
  resetForm,
} from '../../../redux/reducers/LoginFormSlice';

export default function LoginModal() {
  const [isSignIn, setIsSignIn] = useState(true);
  const { email, name, password, passwordCheck, message } = useAppSelector((state) => state.loginForm.value);
  const dispatch = useAppDispatch();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setMessage(isSignIn));

    if (isValid()) {
      const url = isSignIn ? 'http://3.36.230.165:8080/user/login' : 'http://3.36.230.165:8080/user/signup';
      const body = isSignIn ? { username: email, password } : { name, username: email, password };

      postUser(url, body);
    }
  };

  const isValid = () => {
    return isSignIn
      ? email !== '' && password !== ''
      : email !== '' && password !== '' && name !== '' && passwordCheck !== '';
  };

  const postUser = (url: string, body: IUserBody) => {
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => console.log(response.json()));
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

  return (
    <>
      <Background />
      <Modal>
        <div className="field--welcome">
          <div className="text">Welcome!</div>
          <Logo>
            <img className="logo__image" src={`${process.env.PUBLIC_URL}/images/careerup_logo_bg.png`} />
            <img className="logo__text" src={`${process.env.PUBLIC_URL}/images/careerup_text_logo.png`} />
          </Logo>
        </div>

        <div className="field--login">
          <div className="text">{isSignIn ? 'Sign in' : 'Sign up'}</div>
          <Link style={{ position: 'absolute', top: '3rem', right: '3rem' }} to="/">
            <IoCloseSharp size={24} color="white" />
          </Link>

          {isSignIn ? (
            <LoginForm onSubmit={onSubmit}>
              <input placeholder="이메일" type="email" value={email} onChange={onChangeEmail} />
              <input placeholder="비밀번호" type="password" value={password} onChange={onChangePassword} />

              <Message>{message}</Message>
              <button>로그인</button>
              <div>
                <span>비밀번호 찾기</span> | <span onClick={changeForm}>회원가입</span>
              </div>
            </LoginForm>
          ) : (
            <LoginForm onSubmit={onSubmit}>
              <input placeholder="이름" type="text" value={name} onChange={onChangeName} />
              <input placeholder="이메일" type="email" value={email} onChange={onChangeEmail} />
              <input placeholder="비밀번호" type="password" value={password} onChange={onChangePassword} />
              <input
                placeholder="비밀번호 확인"
                type="password"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              />

              <Message>{message}</Message>
              <button>회원가입</button>
              <div>
                <span onClick={changeForm}>로그인</span>
              </div>
            </LoginForm>
          )}
        </div>
      </Modal>
    </>
  );
}
