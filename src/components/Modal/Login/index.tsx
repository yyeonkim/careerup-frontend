import { Link } from 'react-router-dom';
import { SlClose } from 'react-icons/sl';

import { Modal } from './style';
import { LoginGoogle } from '../../../components/LoginGoogle';
import NaverLogin from '../../../components/NaverLogin';

export default function LoginModal() {
  return (
    <Modal>
      <div className="field--welcome">
        <div className="text">Welcome!</div>
        <div className="logo">
          <img className="logo__image" src={`${process.env.PUBLIC_URL}/images/careerup_logo_big.png`} />
          <div className="logo__text">Career:up</div>
        </div>
      </div>

      <div className="field--login">
        <div>
          <LoginGoogle />
          <NaverLogin />
        </div>
        <div className="text">Sign in</div>
        <Link style={{ position: 'absolute', top: '2rem', right: '2rem' }} to="/">
          <SlClose size={32} color="#959595" />
        </Link>
      </div>
    </Modal>
  );
}
