import { Link } from 'react-router-dom';

import { CloseButton, Modal } from './style';
import { LoginGoogle } from '../../../components/LoginGoogle';
import NaverLogin from '../../../components/NaverLogin';

export default function LoginModal() {
  return (
    <Modal>
      <div className="field--welcome"></div>

      <div className="field--login">
        <div>
          <LoginGoogle />
          <NaverLogin />
        </div>

        <Link to="/">
          <CloseButton>close</CloseButton>
        </Link>
      </div>
    </Modal>
  );
}
