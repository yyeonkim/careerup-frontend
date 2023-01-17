import styled from '@emotion/styled';

export const List = styled.ul`
  position: absolute;
  top: 7rem;
  right: 2rem;

  background-color: white;
  border: 1px solid lightgray;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  z-index: 10;
`;

export const itemStyle = {
  default: {
    padding: '1rem 0',
    cursor: 'pointer',
  },
  delete: {
    padding: '1rem 0',
    cursor: 'pointer',
    color: 'red',
  },
};
