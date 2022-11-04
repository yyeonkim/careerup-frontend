import { GoogleLogo, StyledButton, StyledText } from './style';

export default function GoogleLoginBtn() {
  const logoImg = process.env.PUBLIC_URL + '/images/google-logo.png';

  return (
    <StyledButton>
      <GoogleLogo src={logoImg} />
      <StyledText> 구글 계정으로 시작하기</StyledText>
    </StyledButton>
  );
}
