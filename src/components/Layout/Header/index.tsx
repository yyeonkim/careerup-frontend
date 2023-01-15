import { useHistory } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { toggle } from '../../../redux/reducers/DropdownSlice';
import Dropdown from '../../Dropdown';
import { Container, Logo, ProfileImage } from './style';

export default function Header() {
  const history = useHistory();
  const profileImagePath = useAppSelector((state) => state.user.entities.picture);
  const isOpen = useAppSelector((state) => state.dropdown.value);
  const dispatch = useAppDispatch();

  const goHome = () => {
    history.push('/');
  };

  const onClickProfile = () => {
    dispatch(toggle());
  };

  return (
    <Container>
      <Logo onClick={goHome}>
        <img className="logo__image" src={`${process.env.PUBLIC_URL}/images/careerup_logo_bg.png`} />
        <div className="logo__text">Career:up</div>
      </Logo>
      <ProfileImage onClick={onClickProfile} src={profileImagePath} />
      {isOpen && <Dropdown />}
    </Container>
  );
}
