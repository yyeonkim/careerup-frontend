import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1.5rem;

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
    color: white;

    ::placeholder {
      color: white;
      font-weight: 100;
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

export const Message = styled.span`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
`;
