import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';

import { Modal, Logo } from './style';
import LoginForm from '../../LoginForm';
import { useAppDispatch } from '../../../redux/hooks';
import { resetForm } from '../../../redux/reducers/LoginSlice';
import Background from '../Background';

function LoginModal() {
  const history = useHistory();
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useAppDispatch();

  const onClickClose = () => {
    history.push('/');
    dispatch(resetForm());
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
          <div className="close" onClick={onClickClose}>
            <IoCloseSharp size={24} color="white" />
          </div>
          <LoginForm isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
        </div>
      </Modal>
    </>
  );
}

export default React.memo(LoginModal);
