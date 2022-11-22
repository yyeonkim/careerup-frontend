import styled from '@emotion/styled';

export const Modal = styled.div`
  background-color: gray;
  display: flex;
  width: 90%;
  height: 50rem;
  max-width: 100rem;
  border-radius: 1rem;

  /* 가운데 배치 */
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .field--welcome {
    position: relative;
    background-color: #ededed;
    width: 50%;
    height: 100%;
    border-radius: 1rem 0 0 1rem;

    /* 가운데 배치 */
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      position: absolute;
      top: 5rem;
      left: 5rem;
      font-size: 2.5rem;
    }

    .logo {
      text-align: center;

      .logo__image {
        width: 13.5rem;
        margin-bottom: 2rem;
      }

      .logo__text {
        font-size: 3.2rem;
        font-weight: 500;
      }
    }
  }

  .field--login {
    position: relative;
    background-color: #d4d4d4;
    width: 50%;
    height: 100%;
    border-radius: 0 1rem 1rem 0;

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

    .text {
      position: absolute;
      top: 5rem;
      left: 8rem;
      font-size: 2.4rem;
    }
  }
`;
