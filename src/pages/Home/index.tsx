import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Container, LoginButton, Header, Main, MapButton, Slider } from './style';
import LoginModal from '../../components/Modal/Login';
import useAutoSlide from '../../hooks/useAutoSlide';
import Dropdown from '../../components/Dropdown';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggle, close } from '../../redux/reducers/DropdownSlice';
import { getAccessToken } from '../../api/user';
import useGetData from '../../hooks/useGetData';
import { getUserData } from '../../redux/actions/UserAPI';

// 슬라이드에 들어갈 이미지
const slides = [
  { className: 'proto', path: '/images/prototype.png' },
  { className: 'logo', path: '/images/careerup_logo_no_bg_big.png' },
];

const accessToken = getAccessToken();

export default function Home() {
  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(0); // 현재 슬라이드 이미지 index
  const profileUrl = useAppSelector((state) => state.user.entities.picture);
  const isLoading = useAppSelector((state) => state.user.loading);
  const isOpen = useAppSelector((state) => state.dropdown.value);
  const dispatch = useAppDispatch();

  useGetData(getUserData);
  useAutoSlide(slides, setActiveIndex);

  const toggleDropdown = () => {
    dispatch(toggle());
  };

  const closeDropdown = () => {
    dispatch(close());
  };

  return (
    <Container>
      <Header>
        {accessToken ? (
          <>
            <img src={isLoading ? require('../../assets/profile.jpg') : profileUrl} onClick={toggleDropdown} />
            {isOpen && <Dropdown />}
          </>
        ) : (
          <Link to={{ hash: '#login' }}>
            <LoginButton>Sign in</LoginButton>
          </Link>
        )}
      </Header>

      <Main onClick={closeDropdown}>
        <div className="content">
          <div className="info">
            <div>
              내 손으로 직접 만드는
              <br />
              커리어 성장 플랫폼
            </div>
            <img src={process.env.PUBLIC_URL + '/images/careerup_text_logo.png'} />
          </div>

          <Slider>
            {slides.map((item, index) => {
              if (index === activeIndex) {
                return (
                  <img
                    key={item.className}
                    className={item.className + ' active'}
                    src={process.env.PUBLIC_URL + item.path}
                  />
                );
              }
              return <img key={item.className} className={item.className} src={process.env.PUBLIC_URL + item.path} />;
            })}
          </Slider>
        </div>

        <Link to="/mypage">
          <MapButton>
            <span>내 커리어 맵 만들러가기</span>
            <AiOutlineArrowRight size="3.2rem" />
          </MapButton>
        </Link>
      </Main>

      {location.hash === '#login' && <LoginModal />}
    </Container>
  );
}
