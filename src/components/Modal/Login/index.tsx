import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';

import { Background, Modal } from './style';
import { LoginGoogle } from '../../../components/LoginGoogle';
import NaverLogin from '../../../components/NaverLogin';

export default function LoginModal() {
  return (
    <>
      <Background />
      <Modal>
        <div className="field--welcome">
          <div className="text">Welcome!</div>
          <div className="logo">
            <img className="logo__image" src={`${process.env.PUBLIC_URL}/images/careerup_logo_bg.png`} />
            <img className="logo__text" src={`${process.env.PUBLIC_URL}/images/careerup_text_logo.png`} />
          </div>
        </div>

        <div className="field--login">
          <div>
            <LoginGoogle />
            <NaverLogin />
          </div>
          <div className="text">Sign in</div>
          <Link style={{ position: 'absolute', top: '3rem', right: '3rem' }} to="/">
            <IoCloseSharp size={24} color="white" />
          </Link>
        </div>
      </Modal>
    </>
  );
}
