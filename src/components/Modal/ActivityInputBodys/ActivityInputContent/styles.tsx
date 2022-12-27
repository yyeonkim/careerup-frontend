import styled from '@emotion/styled';

export const Info = styled.div`
  & > div {
    margin: 0 4rem;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;

    & > div {
      width: 13rem;
    }

    & > input {
      border: none;

      color: #4e4e4e;
      font-size: 1.6rem;

      &:focus {
        outline: none;
      }
    }
  }

  .dateWave {
    margin-right: 0.3rem;
  }
`;
