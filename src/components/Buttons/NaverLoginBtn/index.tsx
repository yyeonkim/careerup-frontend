import { Logo, StyledButton, Text } from './style';

export default function NaverLoginBtn() {
  return (
    <StyledButton>
      <Logo src="images/naver-logo.png" />
      <Text> 네이버 계정으로 시작하기</Text>
    </StyledButton>
  );
}
