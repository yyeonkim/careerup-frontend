import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';

import { Background, Modal, LoginForm, Logo } from './style';

export default function LoginModal() {
  const [email, setEmail] = useState<string>('');
  const [password, setaPassword] = useState<string>('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 사용자 로그인 진행 (JWT 로그인)
  };

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setaPassword(event.currentTarget.value);
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
          <LoginForm onSubmit={onSubmit}>
            <input placeholder="이메일" value={email} onChange={changeEmail} />
            <input placeholder="비밀번호" value={password} onChange={changePassword} />
            <button>로그인</button>
            <div>
              <span>비밀번호 찾기</span> | <span>회원가입</span>
            </div>
          </LoginForm>
          <div className="text">Sign in</div>
          <Link style={{ position: 'absolute', top: '3rem', right: '3rem' }} to="/">
            <IoCloseSharp size={24} color="white" />
          </Link>
        </div>
      </Modal>
    </>
  );
}
