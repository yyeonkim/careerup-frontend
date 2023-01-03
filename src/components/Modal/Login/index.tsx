import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';

import { Background, Modal, Logo } from './style';
import LoginForm from '../../LoginForm';

export default function LoginModal() {
  const [isSignIn, setIsSignIn] = useState(true);

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
          <LoginForm isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
        </div>
      </Modal>
    </>
  );
}
