import { GoogleLogo, StyledButton, StyledText } from './style';

interface Props {
  onClick: () => void;
}

export default function GoogleLoginBtn({ onClick }: Props) {
  const logoImg = process.env.PUBLIC_URL + '/images/google-logo.png';

  return (
    <StyledButton onClick={onClick}>
      <GoogleLogo src={logoImg} />
      <StyledText> 구글 계정으로 시작하기</StyledText>
    </StyledButton>
  );
}
