import styled from '@emotion/styled';

export const Content = styled.div`
  display: flex;
  align-items: center;
  line-height: 3.8rem;
  gap: 3.4rem;

  span: first-of-type {
    font-size: 2.4rem;
    color: #696969;
    font-weight: 100;
  }

  span: nth-of-type(2), input {
    font-size: 2rem;
    max-width: 18rem;
  }

  span: nth-of-type(2) {
    overflow: hidden;
    white-space: nowrap;
  }

  input {
    display: block;
    width: 18rem;
    border: none;
    border-bottom: 1px solid gray;
  }
`;
