import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Container, LoginButton, Header, Main, MapButton, Slider, Dropdown } from './style';
import LoginModal from '../../components/Modal/Login';
import useAutoSlide from '../../hooks/useAutoSlide';

// 슬라이드에 들어갈 이미지
const slides = [
  { className: 'proto', path: '/images/prototype.png' },
  { className: 'logo', path: '/images/careerup_logo_no_bg_big.png' },
];

const accessToken = localStorage.getItem('accessToken');

export default function Home() {
  const location = useLocation();
  const history = useHistory();

  const [activeIndex, setActiveIndex] = useState(0); // 현재 슬라이드 이미지 index
  const [isOpen, setIsOpen] = useState(false);

  useAutoSlide(slides, setActiveIndex);

  const toggleDropdown = () => {
    setIsOpen((current) => !current);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const onClickDropdown = (event: React.MouseEvent<HTMLLIElement>) => {
    const textContent = event.currentTarget.textContent;
    const isLogout = textContent === '로그아웃';

    if (isLogout) {
      localStorage.removeItem('accessToken');
      history.go(0);
    } else {
      history.push('/mypage');
    }
  };

  return (
    <Container>
      <Header>
        {accessToken ? (
          <>
            <img src={require('../../assets/profile.jpg')} onClick={toggleDropdown} />
            {isOpen && (
              <Dropdown>
                <li onClick={onClickDropdown}>마이페이지</li>
                <hr color="lightgrey" />
                <li onClick={onClickDropdown}>로그아웃</li>
              </Dropdown>
            )}
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

        <Link to="/career-maps">
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
