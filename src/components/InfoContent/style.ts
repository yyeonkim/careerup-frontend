import styled from '@emotion/styled';

export const Content = styled.p`
  display: flex;
  align-items: center;

  input {
    display: block;
    height: 2.5rem;
    font-weight: 500;
    font-size: 2rem;
    border: none;

    ::placeholder {
      color: #bebebe;
    }
    :disabled {
      background-color: transparent;
    }
  }
`;
