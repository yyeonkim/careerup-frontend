import { Logo, StyledButton, Text } from './style';

export default function GoogleLoginBtn() {
  const logoImg = process.env.PUBLIC_URL + '/images/google-logo.png';

  return (
    <StyledButton>
      <Logo src={logoImg} />
      <Text> 구글 계정으로 시작하기</Text>
    </StyledButton>
  );
}
