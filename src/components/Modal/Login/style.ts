import styled from '@emotion/styled';

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Modal = styled.div`
  display: flex;
  width: 90%;
  height: 62rem;
  max-width: 1038px;
  border-radius: 4rem;

  /* 가운데 배치 */
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .field--welcome {
    position: relative;
    background-color: white;
    width: 50%;
    height: 100%;
    border-radius: 4rem 0 0 4rem;

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
        width: 21rem;
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
    background-color: ${(props) => props.theme.colors.primary};
    width: 50%;
    height: 100%;
    border-radius: 0 4rem 4rem 0;

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
