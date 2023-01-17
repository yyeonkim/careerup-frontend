import styled from '@emotion/styled';

export const Content = styled.div`
  display: flex;
  align-items: center;
  line-height: 3.8rem;
  gap: 3.4rem;

  span {
    font-size: 2.4rem;
    color: #696969;
    font-weight: 100;
  }

  input {
    font-size: 2rem;
    display: block;
    width: 18rem;
    border: none;

    :disabled {
      background-color: transparent;
    }
  }
`;
