import styled from '@emotion/styled';

export const Content = styled.p`
  display: flex;
  align-items: center;

  input {
    display: block;
    height: 2rem;
    font-weight: 500;
    font-size: 2rem;
    border: none;
    border-bottom: 1px solid gray;
    ::placeholder {
      color: #bebebe;
    }
  }
`;
