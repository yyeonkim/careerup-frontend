import { css, keyframes } from '@emotion/css';

const spin = keyframes`
  0% { transform: rotate(0deg)}

  100% { transform: rotate(360deg)}
`;

export const loaderDiv = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  border: 1rem solid #f3f3f3; /* Light grey */
  border-top: 1rem solid #29cc6a; /* Primary color */
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  animation: ${spin} 2s linear infinite;
`;
