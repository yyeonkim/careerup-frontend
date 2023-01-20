import { Link, useLocation } from 'react-router-dom';
import useGetData from '../../../hooks/useGetData';
import { getUserData } from '../../../redux/actions/UserAPI';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { toggle } from '../../../redux/reducers/DropdownSlice';
import Dropdown from '../../Dropdown';
import HomeLogo from '../../HomeLogo';
import { Container, Login, ProfileImage } from './style';

export default function Header() {
  const location = useLocation();
  const profileImagePath = useAppSelector((state) => state.user.entities.picture);
  const isLoading = useAppSelector((state) => state.user.loading);
  const isOpen = useAppSelector((state) => state.dropdown.value);
  const dispatch = useAppDispatch();

  useGetData(getUserData); // 프로필 사진 가져오기

  const onClickProfile = () => {
    dispatch(toggle());
  };

  // 비밀번호 찾기 페이지면 프로필 사진 대신 '로그인' 버튼
  return isLoading ? (
    <></>
  ) : (
    <Container>
      <HomeLogo />
      {location.pathname === '/forgottenpassword' ? (
        <Link to="/#login">
          <Login>로그인</Login>
        </Link>
      ) : (
        <>
          <ProfileImage onClick={onClickProfile} src={profileImagePath} />
          {isOpen && <Dropdown />}
        </>
      )}
    </Container>
  );
}
