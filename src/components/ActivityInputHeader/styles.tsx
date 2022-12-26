import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  margin: 0 4rem;
  margin-top: 3rem;

  & > img {
    width: 5.5rem;
    cursor: pointer;
  }

  & > span {
    margin-left: 1rem;
    font-size: 3rem;
    font-weight: 700;
    color: #696969;
  }
`;

export const TypeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.7rem;
  height: 5.7rem;

  border: 5px solid #6ccea0;
  border-radius: 50%;

  & > img {
    width: 50%;
  }
`;
