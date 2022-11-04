import { RefObject } from 'react';

import { Logo, StyledButton, Text } from './style';

interface NaverLoginBtnProps {
  refObject: RefObject<any>;
}

export default function NaverLoginBtn({ refObject }: NaverLoginBtnProps) {
  const logoImg = process.env.PUBLIC_URL + '/images/naver-logo.png';

  const onClick = () => {
    refObject.current?.children[0].click();
  };

  return (
    <StyledButton onClick={onClick}>
      <Logo src={logoImg} />
      <Text> 네이버 계정으로 시작하기</Text>
    </StyledButton>
  );
}
