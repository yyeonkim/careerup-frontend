import useGetData from '../../../hooks/useGetData';
import { getUserData } from '../../../redux/actions/UserAPI';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { toggle } from '../../../redux/reducers/DropdownSlice';
import Dropdown from '../../Dropdown';
import HomeLogo from '../../HomeLogo';
import { Container, ProfileImage } from './style';

export default function Header() {
  const profileImagePath = useAppSelector((state) => state.user.entities.picture);
  const isLoading = useAppSelector((state) => state.user.loading);
  const isOpen = useAppSelector((state) => state.dropdown.value);
  const dispatch = useAppDispatch();

  useGetData(getUserData); // 프로필 사진 가져오기

  const onClickProfile = () => {
    dispatch(toggle());
  };

  return isLoading ? (
    <></>
  ) : (
    <Container>
      <HomeLogo />
      <ProfileImage onClick={onClickProfile} src={profileImagePath} />
      {isOpen && <Dropdown />}
    </Container>
  );
}
