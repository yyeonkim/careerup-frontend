import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const Logo = styled.div`
  display: flex;

  .logo__image {
    width: 4rem;
    margin-right: 1rem;
  }

  .logo__text {
    font-size: 3.2rem;
  }
`;

export const ProfileImg = styled.img`
  width: 4rem;
  border-radius: 50%;
`;
