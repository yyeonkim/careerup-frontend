import styled from '@emotion/styled';

export const Wrapper = styled.div`
  font-size: 2rem;
  border: 1px solid;
  height: 100vh;

  position: relative;

  & div {
    width: 200px;
    height: 200px;
    padding: 1rem;

    margin-right: auto;

    border: 1px solid;

    & > span {
      width: 100%;
      height: 100%;

      border: 1px solid;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .table {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    position: relative;

    width: 100%;

    border: none;
  }
`;

export const Button = styled.button`
  position: absolute;

  bottom: 0;
  padding: 2rem;
`;
