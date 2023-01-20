import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 8rem;
`;

export const Login = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const ProfileImage = styled.img`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
