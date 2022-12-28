import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';

import { Background, Modal, LoginForm, Logo, Message } from './style';
import { IUserBody } from '../../../interfaces';

export default function LoginModal() {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSignIn) {
      // 사용자 로그인 진행
      const isValid = validateSingIn();

      if (isValid) {
        postUser('http://3.36.230.165:8080/user/login', { username: email, password });
      }
    } else {
      // 회원 가입 진행
      const isValid = validateSignUp();

      if (isValid) {
        postUser('http://3.36.230.165:8080/user/signup', { name, username: email, password });
      }
    }
  };

  const validateSingIn = () => {
    if (email === '') {
      setMessage('*이메일을 입력해주세요.');
      return false;
    }

    if (password === '') {
      setMessage('*비밀번호를 입력해주세요.');
      return false;
    }

    return true;
  };

  const validateSignUp = () => {
    if (name === '') {
      setMessage('*이름을 입력해주세요.');
      return false;
    }

    if (email === '') {
      setMessage('*이메일을 입력해주세요.');
      return false;
    }

    if (password === '') {
      setMessage('*비밀번호를 입력해주세요.');
      return false;
    }

    if (passwordCheck === '') {
      setMessage('*비밀번호 확인을 입력해주세요.');
      return false;
    }

    if (password !== passwordCheck) {
      setMessage('*비밀번호가 일치하지 않습니다.');
      return false;
    }

    return true;
  };

  const postUser = (url: string, body: IUserBody) => {
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => console.log(response.ok));
  };

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const changePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.currentTarget.value);
  };

  const onClickSignUp = () => {
    resetForm();
    setIsSignIn(false);
  };

  const onClickSignIn = () => {
    resetForm();
    setIsSignIn(true);
  };

  const resetForm = () => {
    if (isSignIn) {
      setEmail('');
      setPassword('');
    } else {
      setName('');
      setEmail('');
      setPassword('');
      setPasswordCheck('');
    }
    setMessage('');
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
              <input placeholder="이메일" type="email" value={email} onChange={changeEmail} />
              <input placeholder="비밀번호" type="password" value={password} onChange={changePassword} />

              <Message>{message}</Message>
              <button>로그인</button>
              <div>
                <span>비밀번호 찾기</span> | <span onClick={onClickSignUp}>회원가입</span>
              </div>
            </LoginForm>
          ) : (
            <LoginForm onSubmit={onSubmit}>
              <input placeholder="이름" type="text" value={name} onChange={changeName} />
              <input placeholder="이메일" type="email" value={email} onChange={changeEmail} />
              <input placeholder="비밀번호" type="password" value={password} onChange={changePassword} />
              <input placeholder="비밀번호 확인" type="password" value={passwordCheck} onChange={changePasswordCheck} />

              <Message>{message}</Message>
              <button>회원가입</button>
              <div>
                <span onClick={onClickSignIn}>로그인하기</span>
              </div>
            </LoginForm>
          )}
        </div>
      </Modal>
    </>
  );
}
