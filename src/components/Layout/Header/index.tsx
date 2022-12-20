import { useHistory } from 'react-router-dom';
import { Container, Logo, ProfileImg } from './style';

export default function Header() {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  return (
    <Container>
      <Logo onClick={goHome}>
        <img className="logo__image" src={`${process.env.PUBLIC_URL}/images/careerup_logo_bg.png`} />
        <div className="logo__text">Career:up</div>
      </Logo>
      <ProfileImg src={require('../../../assets/profile.jpg')} />
    </Container>
  );
}
