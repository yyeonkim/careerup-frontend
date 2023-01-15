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

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .logo__image {
    width: 4rem;
    margin-right: 1rem;
  }

  .logo__text {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const ProfileImage = styled.img`
  cursor: pointer;
  width: 4rem;
  border-radius: 50%;
`;
