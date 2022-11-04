import { Logo, StyledButton, Text } from './style';

export default function GoogleLoginBtn() {
  return (
    <StyledButton>
      <Logo src="images/google-logo.png" />
      <Text> 구글 계정으로 시작하기</Text>
    </StyledButton>
  );
}
