import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Container, LoginButton, Header, Main, MapButton, Slider } from './style';
import LoginModal from '../../components/Modal/Login';

const images = [
  { className: 'proto', path: '/images/prototype.png' },
  { className: 'logo', path: '/images/careerup_logo_no_bg_big.png' },
];

export default function Home() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <Container>
      <Header>
        <Link to={{ hash: '#login' }}>
          <LoginButton>Sign in</LoginButton>
        </Link>
      </Header>

      <Main>
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
            {images.map((item, index) => {
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
