import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const moveIn = keyframes`
  from {
    transform: translate(-50%, 10%);
  }

  to {
    transform: translate(-50%, -50%);
  }
`;

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

  animation: ${moveIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;

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
      font-weight: bold;
    }
  }

  .field--login {
    position: relative;
    background-color: ${(props) => props.theme.colors.primary};
    width: 50%;
    height: 100%;
    border-radius: 0 4rem 4rem 0;

    .text {
      position: absolute;
      top: 5rem;
      left: 5rem;
      font-size: 2.4rem;
      color: white;
      font-weight: bold;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo__image {
    width: 21rem;
    margin-bottom: 2rem;
  }

  .logo__text {
    width: 21rem;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  /* 가운데 배치 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  input {
    background-color: transparent;
    border: 2px solid white;
    padding: 1.5rem;
    width: 30rem;
    border-radius: 1.6rem;
    margin-bottom: 1.2rem;
    font-size: 1.6rem;
    font-weight: 500;

    ::placeholder {
      color: white;
    }
  }

  button {
    padding: 1rem 0;
    border-radius: 1rem;
    background-color: white;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.6rem;
    font-weight: 700;
    margin: 1.2rem 0;
  }

  div {
    text-align: center;
    color: white;
    font-size: 1.4rem;
    font-weight: 400;

    span {
      margin: 0 1rem;
      cursor: pointer;
    }
  }
`;
