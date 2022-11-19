import styled from '@emotion/styled';

export const Wrapper = styled.div`
  font-size: 2rem;
  border: 1px solid;
  height: 100vh;
  width: 100vw;

  position: relative;

  & div {
    width: 200px;
    height: 200px;
    padding: 1rem;

    border: 1px solid;

    & > span,
    .addBtn {
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

    width: 100%;
    border: none;
  }
`;
