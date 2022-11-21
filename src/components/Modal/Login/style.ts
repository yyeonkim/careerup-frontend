import styled from '@emotion/styled';

export const Modal = styled.div`
  background-color: gray;
  display: flex;
  width: 90%;
  height: 50rem;
  max-width: 100rem;

  /* 가운데 배치 */
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .field--welcome {
    background-color: lightgray;
    width: 50%;
    height: 100%;
  }

  .field--login {
    position: relative;
    background-color: gray;
    width: 50%;
    height: 100%;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;

      /* 가운데 배치 */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
`;
