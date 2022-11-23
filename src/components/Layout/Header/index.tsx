import { Container, Logo, ProfileImg } from './style';

export default function Header() {
  return (
    <Container>
      <Logo>
        <img className="logo__image" src={`${process.env.PUBLIC_URL}/images/careerup_logo_small.png`} />
        <div className="logo__text">Career:up</div>
      </Logo>
      <ProfileImg src={`${process.env.PUBLIC_URL}/images/profile.jpg`} />
    </Container>
  );
}
